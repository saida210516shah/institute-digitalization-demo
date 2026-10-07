create table if not exists public.learning_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  is_enrolled boolean not null default true,
  lesson_completed boolean not null default false,
  quiz_passed boolean not null default false,
  quiz_score smallint check (quiz_score between 0 and 3),
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

alter table public.learning_progress enable row level security;

grant select, insert, update, delete on public.learning_progress to authenticated;

drop policy if exists "Learners can read their own progress" on public.learning_progress;
create policy "Learners can read their own progress"
  on public.learning_progress for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Learners can create their own progress" on public.learning_progress;
create policy "Learners can create their own progress"
  on public.learning_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Learners can update their own progress" on public.learning_progress;
create policy "Learners can update their own progress"
  on public.learning_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Learners can delete their own progress" on public.learning_progress;
create policy "Learners can delete their own progress"
  on public.learning_progress for delete to authenticated
  using ((select auth.uid()) = user_id);

create index if not exists learning_progress_updated_at_idx
  on public.learning_progress (user_id, updated_at desc);
