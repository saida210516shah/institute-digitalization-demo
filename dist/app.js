(function () {
  "use strict";

  const courses = window.IDI_COURSES || [];
  const tracks = {
    govtech: { icon: "↗", ru: "Цифровое госуправление и GovTech", kk: "Цифрлық мемлекеттік басқару және GovTech" },
    data: { icon: "✳", ru: "ИИ и аналитика данных", kk: "ЖИ және деректер аналитикасы" },
    innovation: { icon: "⌘", ru: "Инновации и цифровые проекты", kk: "Инновациялар және цифрлық жобалар" },
    security: { icon: "◇", ru: "Кибергигиена и защита данных", kk: "Кибергигиена және деректерді қорғау" }
  };
  const audiences = {
    civil: { ru: "Госслужащим", kk: "Мемлекеттік қызметшілерге" },
    master: { ru: "Магистрантам", kk: "Магистранттарға" }
  };
  const text = {
    ru: {
      home: "Главная", catalog: "Курсы", dashboard: "Мой кабинет", demo: "Демо-профиль",
      brand1: "Институт цифровизации", brand2: "и инноваций",
      eyebrow: "Институт цифровизации и инноваций",
      heroTitle: "Цифровые навыки для решений, которые меняют жизнь",
      heroText: "Демо-платформа для магистрантов и госслужащих. Изучайте цифровые инструменты, работайте с данными и проектируйте полезные сервисы.",
      explore: "Выбрать курс", openCabinet: "Открыть демо-кабинет",
      trackLabel: "Учебные направления", trackTitle: "Темы, которые помогают действовать",
      trackText: "Практика государственного сектора, исследования и современные цифровые навыки — в коротких программах.",
      allTracks: "Все направления", courseLabel: "Демо-программа", courseTitle: "Начните с конкретной задачи",
      courseText: "Выберите тему, пройдите короткий урок и проверьте знания на практике.",
      allCourses: "Весь каталог", howTitle: "Учитесь на практических примерах",
      howText: "Пройдите путь слушателя: от выбора курса до проверки знаний.",
      feature1Title: "Короткие уроки", feature1Text: "Понятные шаги, которые удобно изучать в своём темпе.",
      feature2Title: "Проверка знаний", feature2Text: "Короткий тест и обратная связь по результату в каждом курсе.",
      feature3Title: "Ваш прогресс", feature3Text: "Курсы и отметки сохраняются в текущем браузере.",
      promoTitle: "Найдите курс для своей задачи", promoText: "В каталоге есть темы для госслужбы, исследований и цифровых проектов.",
      catalogTitle: "Каталог курсов", catalogIntro: "Демо-программы для тех, кто исследует цифровые решения, работает с данными или меняет государственные услуги.",
      searchLabel: "Найти курс", searchPlaceholder: "Например, аналитика или сервис-дизайн",
      trackFilter: "Направление", audienceFilter: "Для кого", allAudiences: "Любая аудитория",
      allOptions: "Все направления", resultCount: "Найдено", emptyTitle: "По этим условиям курсов нет",
      emptyText: "Выберите другое направление или аудиторию.", resetFilters: "Сбросить фильтры",
      dashboardTitle: "Мой демо-кабинет", dashboardIntro: "Здесь собраны курсы, на которые вы записались в этом браузере.",
      enrolledCount: "Курсов в обучении", completedCount: "Завершено", myCourses: "Мои курсы",
      noCoursesTitle: "Вы пока не выбрали курс", noCoursesText: "Откройте каталог, выберите тему и запишитесь в один клик.",
      courseBrowse: "Перейти в каталог", resetDemo: "Сбросить демо-прогресс",
      localNote: "Открытая демонстрация без аккаунта. Курсы и прогресс хранятся только в текущем браузере и не отправляются на сервер.",
      free: "Бесплатно", approx: "примерно", beginner: "Начальный уровень",
      outcomes: "После курса вы сможете", program: "Программа курса", demoLesson: "Короткий демо-урок",
      courseAccess: "Доступ к программе", modules: "тематических модуля", lesson: "урок и тест",
      enroll: "Записаться на курс", continueLesson: "Продолжить обучение", viewResults: "Посмотреть результат",
      enrolled: "Вы записаны на курс", breadcrumbHome: "Главная", backCatalog: "К каталогу", backCourse: "К курсу",
      lessonLabel: "Демо-урок", markComplete: "Отметить урок завершённым", goToQuiz: "Перейти к тесту",
      lessonDone: "Урок пройден", quizTitle: "Проверьте себя",
      quizIntro: "Выберите один ответ для каждого вопроса. Для прохождения нужно правильно ответить минимум на два вопроса.",
      checkAnswers: "Проверить ответы", retryQuiz: "Попробовать ещё раз", quizPass: "Тест пройден",
      quizRetry: "Попробуйте ещё раз", quizScore: "Ваш результат", of: "из",
      quizNeedAnswers: "Ответьте на все вопросы, чтобы проверить результат.",
      toDashboard: "В демо-кабинет", demoLabel: "Демонстрационная программа",
      plan: "План курса", included: "Включено в демо",
      clearConfirm: "Сбросить записанные курсы и прогресс в этом браузере?",
      progress: "Прогресс", start: "Начать", resume: "Продолжить", completed: "Завершён",
      footerDemo: "Учебные программы и материалы — демонстрационные. Это макет учебного процесса, а не запись на официальное обучение.",
      footerAccess: "Бесплатный демо-доступ", noAccount: "Без регистрации",
      courseNotFound: "Курс не найден", backHome: "На главную",
      resultPassed: "Минимальный порог достигнут.", resultRetry: "Порог пока не достигнут. Изучите материал и попробуйте снова.",
      practice: "Практика", previewLesson: "Предпросмотр урока",
      tracksCount: "демо-курса", skip: "Перейти к содержимому"
    },
    kk: {
      home: "Басты бет", catalog: "Курстар", dashboard: "Жеке кабинетім", demo: "Демо-профиль",
      brand1: "Цифрландыру және", brand2: "инновациялар институты",
      eyebrow: "Цифрландыру және инновациялар институты",
      heroTitle: "Өмірді өзгертетін шешімдерге арналған цифрлық дағдылар",
      heroText: "Магистранттар мен мемлекеттік қызметшілерге арналған демо-платформа. Цифрлық құралдарды меңгеріп, деректермен жұмыс істеп, пайдалы сервистерді жобалаңыз.",
      explore: "Курс таңдау", openCabinet: "Демо-кабинетті ашу",
      trackLabel: "Оқу бағыттары", trackTitle: "Әрекет етуге көмектесетін тақырыптар",
      trackText: "Мемлекеттік сектор тәжірибесі, зерттеулер және заманауи цифрлық дағдылар қысқа бағдарламаларда бірігеді.",
      allTracks: "Барлық бағыттар", courseLabel: "Демо-бағдарлама", courseTitle: "Нақты міндеттен бастаңыз",
      courseText: "Тақырыпты таңдап, қысқа сабақтан өтіп, біліміңізді тәжірибеде тексеріңіз.",
      allCourses: "Барлық курстар", howTitle: "Практикалық мысалдармен оқыңыз",
      howText: "Тыңдаушының жолынан өтіңіз: курс таңдаудан бастап білімді тексеруге дейін.",
      feature1Title: "Қысқа сабақтар", feature1Text: "Өз қарқыныңызбен оқуға ыңғайлы түсінікті қадамдар.",
      feature2Title: "Білімді тексеру", feature2Text: "Әр курста қысқа тест және нәтиже бойынша кері байланыс бар.",
      feature3Title: "Прогресіңіз", feature3Text: "Курстар мен белгілер осы браузерде сақталады.",
      promoTitle: "Міндетіңізге сай курсты табыңыз", promoText: "Каталогта мемлекеттік қызметке, зерттеулерге және цифрлық жобаларға арналған тақырыптар бар.",
      catalogTitle: "Курстар каталогы", catalogIntro: "Цифрлық шешімдерді зерттейтін, деректермен жұмыс істейтін немесе мемлекеттік қызметтерді өзгертетін адамдарға арналған демо-бағдарламалар.",
      searchLabel: "Курс іздеу", searchPlaceholder: "Мысалы, аналитика немесе сервис-дизайн",
      trackFilter: "Бағыт", audienceFilter: "Кімге арналған", allAudiences: "Кез келген аудитория",
      allOptions: "Барлық бағыттар", resultCount: "Табылды", emptyTitle: "Бұл шарттарға сай курс жоқ",
      emptyText: "Басқа бағытты немесе аудиторияны таңдап көріңіз.", resetFilters: "Сүзгілерді тазалау",
      dashboardTitle: "Менің демо-кабинетім", dashboardIntro: "Мұнда осы браузерде тіркелген курстарыңыз көрсетіледі.",
      enrolledCount: "Оқудағы курстар", completedCount: "Аяқталды", myCourses: "Менің курстарым",
      noCoursesTitle: "Сіз әлі курс таңдамадыңыз", noCoursesText: "Каталогты ашып, тақырып таңдап, бір рет басып жазылыңыз.",
      courseBrowse: "Каталогқа өту", resetDemo: "Демо-прогресті тазалау",
      localNote: "Бұл — аккаунтсыз ашық демо-нұсқа. Курстар мен прогресс тек осы браузерде сақталады және серверге жіберілмейді.",
      free: "Тегін", approx: "шамамен", beginner: "Бастапқы деңгей",
      outcomes: "Курстан кейін сіз", program: "Курс бағдарламасы", demoLesson: "Қысқа демо-сабақ",
      courseAccess: "Бағдарламаға қолжетімділік", modules: "тақырыптық модуль", lesson: "сабақ пен тест",
      enroll: "Курсқа жазылу", continueLesson: "Оқуды жалғастыру", viewResults: "Нәтижені көру",
      enrolled: "Сіз курсқа жазылдыңыз", breadcrumbHome: "Басты бет", backCatalog: "Каталогқа", backCourse: "Курсқа",
      lessonLabel: "Демо-сабақ", markComplete: "Сабақты аяқталды деп белгілеу", goToQuiz: "Тестке өту",
      lessonDone: "Сабақ аяқталды", quizTitle: "Өзіңізді тексеріңіз",
      quizIntro: "Әр сұраққа бір жауап таңдаңыз. Өту үшін кемінде екі сұраққа дұрыс жауап беру керек.",
      checkAnswers: "Жауаптарды тексеру", retryQuiz: "Қайталап көру", quizPass: "Тесттен өттіңіз",
      quizRetry: "Қайталап көріңіз", quizScore: "Нәтижеңіз", of: "ішінен",
      quizNeedAnswers: "Нәтижені тексеру үшін барлық сұраққа жауап беріңіз.",
      toDashboard: "Демо-кабинетке", demoLabel: "Демонстрациялық бағдарлама",
      plan: "Курс жоспары", included: "Демоға кіреді",
      clearConfirm: "Осы браузердегі курстар мен прогресті тазалайсыз ба?",
      progress: "Прогресс", start: "Бастау", resume: "Жалғастыру", completed: "Аяқталды",
      footerDemo: "Оқу бағдарламалары мен материалдар демонстрациялық сипатта. Бұл — оқу процесінің макеті, ресми оқуға жазылу емес.",
      footerAccess: "Тегін демо-қолжетімділік", noAccount: "Тіркелусіз",
      courseNotFound: "Курс табылмады", backHome: "Басты бетке",
      resultPassed: "Ең төменгі шектен өттіңіз.", resultRetry: "Шекке әлі жеткен жоқсыз. Материалды оқып, қайта көріңіз.",
      practice: "Практика", previewLesson: "Сабақты алдын ала көру",
      tracksCount: "демо-курс", skip: "Мазмұнға өту"
    }
  };

  const STORAGE_KEY = "idi-learning-demo-v1";
  const emptyState = { language: "ru", enrolled: [], lessonsDone: [], quizzesPassed: [], quizScores: {} };
  let state = readState();
  let pendingTrack = "";
  let toastTimer;

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return Object.assign({}, emptyState);
      const known = function (id) { return courses.some(function (course) { return course.id === id; }); };
      const scores = {};
      if (saved.quizScores && typeof saved.quizScores === "object") {
        Object.keys(saved.quizScores).forEach(function (id) {
          const n = Number(saved.quizScores[id]);
          if (known(id) && Number.isInteger(n) && n >= 0 && n <= 3) scores[id] = n;
        });
      }
      return {
        language: saved.language === "kk" ? "kk" : "ru",
        enrolled: Array.isArray(saved.enrolled) ? saved.enrolled.filter(known) : [],
        lessonsDone: Array.isArray(saved.lessonsDone) ? saved.lessonsDone.filter(known) : [],
        quizzesPassed: Array.isArray(saved.quizzesPassed) ? saved.quizzesPassed.filter(known) : [],
        quizScores: scores
      };
    } catch (error) { return Object.assign({}, emptyState); }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { /* Keep this session usable when storage is blocked. */ }
  }
  function T() { return text[state.language]; }
  function current(course) { return course[state.language] || course.ru; }
  function esc(value) {
    return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function courseById(id) { return courses.find(function (course) { return course.id === id; }); }
  function has(list, id) { return list.indexOf(id) !== -1; }
  function pct(course) {
    return Math.round(((has(state.lessonsDone, course.id) ? 1 : 0) + (has(state.quizzesPassed, course.id) ? 1 : 0)) * 50);
  }
  function getRoute() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    let id = parts[1] || "";
    try { id = decodeURIComponent(id); } catch (error) { /* Use the original route segment. */ }
    if (parts[0] === "catalog") return { page: "catalog" };
    if (parts[0] === "dashboard") return { page: "dashboard" };
    if (["course", "lesson", "quiz"].indexOf(parts[0]) !== -1 && id) return { page: parts[0], id: id };
    return { page: "home" };
  }
  function escAttr(value) { return esc(value); }
  function audienceTags(course) {
    return course.audiences.map(function (key) { return '<span class="tag">' + esc(audiences[key][state.language]) + '</span>'; }).join("");
  }
  function brand() {
    return '<a class="brand" href="#/" aria-label="' + escAttr(T().eyebrow) + '"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name">' +
      esc(T().brand1) + '<span>' + esc(T().brand2) + '</span></span></a>';
  }
  function navLink(route, label, active) {
    const href = route ? "#/" + route : "#/";
    return '<a class="nav-link' + (active ? " active" : "") + '" href="' + href + '">' + esc(label) + '</a>';
  }
  function header(page) {
    return '<header class="site-header"><div class="header-inner">' + brand() +
      '<nav class="main-nav" aria-label="' + (state.language === "ru" ? "Основная навигация" : "Негізгі навигация") + '">' +
      navLink("", T().home, page === "home") + navLink("catalog", T().catalog, page === "catalog") + navLink("dashboard", T().dashboard, page === "dashboard") +
      '</nav><div class="header-actions"><div class="locale-switch" role="group" aria-label="' + (state.language === "ru" ? "Язык" : "Тіл") + '">' +
      '<button class="locale-button' + (state.language === "ru" ? " active" : "") + '" data-action="language" data-value="ru" aria-pressed="' + (state.language === "ru") + '">RU</button>' +
      '<button class="locale-button' + (state.language === "kk" ? " active" : "") + '" data-action="language" data-value="kk" aria-pressed="' + (state.language === "kk") + '">KZ</button>' +
      '</div><span class="demo-profile"><i class="profile-dot"></i>' + esc(T().demo) + '</span></div></div></header>';
  }
  function footer() {
    return '<footer class="site-footer"><div class="container footer-inner"><div><div class="footer-name">' + esc(T().eyebrow) +
      '</div><p class="footer-copy">' + esc(T().footerDemo) + '</p></div><div class="footer-meta">' + esc(T().footerAccess) + '<br>' + esc(T().noAccount) + '</div></div></footer>';
  }
  function trackCard(id, index) {
    const count = courses.filter(function (course) { return course.track === id; }).length;
    return '<a class="track-card" href="#/catalog" data-track-jump="' + id + '"><div><div class="track-number">0' + (index + 1) + ' / 0' + count +
      '</div><div class="track-icon" aria-hidden="true">' + esc(tracks[id].icon) + '</div><h3>' + esc(tracks[id][state.language]) + '</h3></div>' +
      '<div class="track-count">' + count + " " + esc(T().tracksCount) + '</div></a>';
  }
  function courseCard(course) {
    const item = current(course);
    const search = (item.title + " " + item.summary + " " + tracks[course.track][state.language]).toLowerCase();
    return '<article class="course-card" data-course-card="' + escAttr(course.id) + '" data-track="' + escAttr(course.track) + '" data-audience="' + escAttr(course.audiences.join(",")) + '" data-search="' + escAttr(search) + '">' +
      '<div class="course-topline"><span class="course-track">' + esc(tracks[course.track][state.language]) + '</span><span class="course-mark" aria-hidden="true">' + esc(tracks[course.track].icon) + '</span></div>' +
      '<h3><a href="#/course/' + escAttr(course.id) + '">' + esc(item.title) + '</a></h3><p>' + esc(item.summary) + '</p><div class="course-tags">' + audienceTags(course) + '</div>' +
      '<div class="course-bottom"><div class="course-meta"><span>◷ ' + esc(T().approx) + " " + esc(course.duration[state.language]) + '</span><span>· ' + esc(course.level[state.language]) + '</span></div>' +
      '<a class="course-open" href="#/course/' + escAttr(course.id) + '">' + (state.language === "ru" ? "Подробнее ↗" : "Толығырақ ↗") + '</a></div></article>';
  }
  function localNote() {
    return '<div class="info-note"><span class="note-icon">i</span><span>' + esc(T().localNote) + '</span></div>';
  }
  function homePage() {
    const ids = Object.keys(tracks);
    const featured = ids.map(function (track) { return courses.find(function (course) { return course.track === track; }); }).filter(Boolean);
    return '<main id="main"><section class="hero"><div class="container"><div class="hero-panel"><div class="hero-copy"><div class="eyebrow">' + esc(T().eyebrow) + '</div>' +
      '<h1>' + esc(T().heroTitle) + '</h1><p class="hero-description">' + esc(T().heroText) + '</p><div class="button-row">' +
      '<a class="button button-primary" href="#/catalog">' + esc(T().explore) + '<span class="button-arrow">↗</span></a>' +
      '<a class="button button-secondary" href="#/dashboard">' + esc(T().openCabinet) + '</a></div></div>' +
      '<div class="hero-art" aria-hidden="true"><div class="art-orbit"></div><div class="art-core"><div class="art-glyph"><span></span></div></div>' +
      '<div class="float-card one"><div class="float-kicker">' + esc(T().courseLabel) + '</div><div class="float-value"><i class="mini-icon">✳</i>' + courses.length + (state.language === "ru" ? " коротких курсов" : " қысқа курс") + '</div></div>' +
      '<div class="float-card two"><div class="float-kicker">' + (state.language === "ru" ? "Формат" : "Формат") + '</div><div class="float-value"><i class="mini-icon">✓</i>' + (state.language === "ru" ? "Уроки и практика" : "Сабақтар мен практика") + '</div></div></div>' +
      '</div></div></section>' +
      '<section class="section"><div class="container"><div class="section-heading"><div><div class="eyebrow">' + esc(T().trackLabel) + '</div><h2>' + esc(T().trackTitle) + '</h2><p class="section-subtitle">' + esc(T().trackText) + '</p></div>' +
      '<a class="text-link" href="#/catalog">' + esc(T().allTracks) + ' <span>↗</span></a></div><div class="track-grid">' + ids.map(trackCard).join("") + '</div></div></section>' +
      '<section class="section"><div class="container"><div class="section-heading"><div><div class="eyebrow">' + esc(T().courseLabel) + '</div><h2>' + esc(T().courseTitle) + '</h2><p class="section-subtitle">' + esc(T().courseText) + '</p></div>' +
      '<a class="text-link" href="#/catalog">' + esc(T().allCourses) + ' <span>↗</span></a></div><div class="course-grid">' + featured.map(courseCard).join("") + '</div>' +
      '<div class="promo-strip"><div><h3>' + esc(T().promoTitle) + '</h3><p>' + esc(T().promoText) + '</p></div><a class="button button-light button-small" href="#/catalog">' + esc(T().allCourses) + ' <span class="button-arrow">↗</span></a></div></div></section>' +
      '<section class="section"><div class="container"><div class="section-heading"><div><div class="eyebrow">' + esc(T().howTitle) + '</div><h2>' + esc(T().howText) + '</h2></div></div><div class="feature-grid">' +
      '<article class="feature"><div class="feature-icon">◷</div><h3>' + esc(T().feature1Title) + '</h3><p>' + esc(T().feature1Text) + '</p></article>' +
      '<article class="feature"><div class="feature-icon">✓</div><h3>' + esc(T().feature2Title) + '</h3><p>' + esc(T().feature2Text) + '</p></article>' +
      '<article class="feature"><div class="feature-icon">↗</div><h3>' + esc(T().feature3Title) + '</h3><p>' + esc(T().feature3Text) + '</p></article></div></div></section></main>';
  }
  function catalogPage() {
    const options = Object.keys(tracks).map(function (id) { return '<option value="' + id + '">' + esc(tracks[id][state.language]) + '</option>'; }).join("");
    return '<main id="main"><div class="container"><section class="page-intro"><div class="eyebrow">' + esc(T().courseLabel) + '</div><h1>' + esc(T().catalogTitle) +
      '</h1><p>' + esc(T().catalogIntro) + '</p><div class="catalog-tools">' +
      '<label class="control"><span aria-hidden="true">⌕</span><input id="course-search" type="search" placeholder="' + escAttr(T().searchPlaceholder) + '" aria-label="' + escAttr(T().searchLabel) + '"></label>' +
      '<label class="control"><span><span class="control-label">' + esc(T().trackFilter) + '</span><select id="track-filter"><option value="">' + esc(T().allOptions) + '</option>' + options + '</select></span></label>' +
      '<label class="control"><span><span class="control-label">' + esc(T().audienceFilter) + '</span><select id="audience-filter"><option value="">' + esc(T().allAudiences) + '</option>' +
      '<option value="civil">' + esc(audiences.civil[state.language]) + '</option><option value="master">' + esc(audiences.master[state.language]) + '</option></select></span></label></div>' +
      '<div class="catalog-result"><span id="result-count">' + esc(T().resultCount) + ": " + courses.length + '</span><span>' + esc(T().demoLabel) + '</span></div>' +
      '<div class="catalog-grid" id="catalog-grid">' + courses.map(courseCard).join("") + '</div>' +
      '<div class="empty-state" id="empty-state"><h3>' + esc(T().emptyTitle) + '</h3><p>' + esc(T().emptyText) + '</p><button class="button button-secondary button-small" data-action="reset-filters">' + esc(T().resetFilters) + '</button></div>' +
      localNote() + '</section></div></main>';
  }
  function dashboardPage() {
    const enrolled = state.enrolled.map(courseById).filter(Boolean);
    const cards = enrolled.map(function (course) {
      const item = current(course);
      const percent = pct(course);
      const next = has(state.lessonsDone, course.id) ? "quiz" : "lesson";
      const action = has(state.lessonsDone, course.id) ? T().viewResults : (percent ? T().resume : T().start);
      return '<article class="dashboard-card"><div class="dashboard-symbol">' + esc(tracks[course.track].icon) + '</div><div><h3><a href="#/course/' + escAttr(course.id) + '">' + esc(item.title) + '</a></h3><p>' + esc(tracks[course.track][state.language]) + '</p>' +
        '<div class="progress-line" aria-label="' + esc(T().progress) + ': ' + percent + '%"><span style="width:' + percent + '%"></span></div>' +
        '<div class="dashboard-card-bottom"><span>' + esc(T().progress) + ' · ' + percent + '%</span><a class="course-open" href="#/' + next + '/' + escAttr(course.id) + '">' + esc(action) + ' ↗</a></div></div></article>';
    }).join("");
    const completed = enrolled.filter(function (course) { return has(state.lessonsDone, course.id) && has(state.quizzesPassed, course.id); }).length;
    return '<main id="main"><div class="container"><section class="page-intro dashboard-top"><div><div class="eyebrow">' + esc(T().demo) + '</div><h1>' + esc(T().dashboardTitle) +
      '</h1><p>' + esc(T().dashboardIntro) + '</p></div><div class="dashboard-summary"><div class="summary-item"><span class="summary-number">' + enrolled.length +
      '</span><span class="summary-label">' + esc(T().enrolledCount) + '</span></div><div class="summary-item"><span class="summary-number">' + completed +
      '</span><span class="summary-label">' + esc(T().completedCount) + '</span></div></div></section><section class="dashboard-section"><h2>' + esc(T().myCourses) + '</h2>' +
      (enrolled.length ? '<div class="dashboard-grid">' + cards + '</div>' : '<div class="empty-dashboard"><h2>' + esc(T().noCoursesTitle) + '</h2><p>' + esc(T().noCoursesText) + '</p><a class="button button-primary button-small" href="#/catalog">' + esc(T().courseBrowse) + ' ↗</a></div>') +
      '</section>' + localNote() + (enrolled.length ? '<button class="button button-secondary button-small" data-action="reset-progress">' + esc(T().resetDemo) + '</button>' : '') + '</div></main>';
  }
  function coursePage(course) {
    const item = current(course);
    const enrolled = has(state.enrolled, course.id);
    const done = has(state.lessonsDone, course.id);
    const passed = has(state.quizzesPassed, course.id);
    const action = enrolled ? (done ? T().viewResults : T().continueLesson) : T().enroll;
    const actionRoute = done ? "quiz" : "lesson";
    const modules = item.modules.map(function (module, index) {
      return '<div class="module-item"><span class="module-number">0' + (index + 1) + '</span><div><strong>' + esc(module) + '</strong><span>' +
        (index === 0 ? esc(T().demoLesson) : esc(T().plan) + " · " + (index + 1)) + '</span></div></div>';
    }).join("");
    const preview = enrolled ? T().continueLesson : T().previewLesson;
    return '<main id="main"><div class="container"><div class="breadcrumbs"><a href="#/">' + esc(T().breadcrumbHome) + '</a><span>›</span><a href="#/catalog">' + esc(T().catalog) + '</a><span>›</span><span>' + esc(tracks[course.track][state.language]) + '</span></div>' +
      '<div class="course-layout"><div class="course-main"><section class="course-heading"><div class="eyebrow">' + esc(tracks[course.track][state.language]) + '</div><h1>' + esc(item.title) +
      '</h1><p>' + esc(item.summary) + '</p><div class="course-facts"><span class="tag">' + esc(course.level[state.language]) + '</span><span class="tag">◷ ' + esc(T().approx) + " " + esc(course.duration[state.language]) +
      '</span>' + audienceTags(course) + (enrolled ? '<span class="tag">' + esc(T().enrolled) + '</span>' : '') + '</div></section>' +
      '<section class="content-block"><h2>' + esc(T().outcomes) + '</h2><ul class="outcome-list">' + item.outcomes.map(function (outcome) { return '<li><span class="check">✓</span><span>' + esc(outcome) + '</span></li>'; }).join("") + '</ul></section>' +
      '<section class="content-block"><h2>' + esc(T().program) + '</h2><div class="module-list">' + modules + '</div></section>' +
      '<section class="content-block"><h2>' + esc(T().demoLesson) + '</h2><p class="section-subtitle" style="margin-top:0">' + esc(item.lesson.title) + ' — ' + esc(item.lesson.lead) + '</p>' +
      '<a class="text-link" href="#/lesson/' + escAttr(course.id) + '">' + esc(preview) + ' ↗</a></section></div>' +
      '<aside class="course-aside"><div class="aside-label">' + esc(T().courseAccess) + '</div><div class="aside-price">' + esc(T().free) + '</div><div class="aside-caption">' + esc(T().demoLabel) + '</div>' +
      '<button class="button button-primary" data-action="' + (enrolled ? "open-course-step" : "enroll") + '" data-id="' + escAttr(course.id) + '" data-route="' + actionRoute + '">' + esc(action) + ' <span class="button-arrow">↗</span></button>' +
      '<ul class="aside-list"><li><span class="check">✓</span>3 ' + esc(T().modules) + '</li><li><span class="check">✓</span>' + esc(T().lesson) + '</li><li><span class="check">✓</span>' + esc(T().progress) + '</li></ul>' +
      (passed ? '<div class="info-note"><span class="note-icon">✓</span><span>' + esc(T().completed) + '</span></div>' : '') + '</aside></div></div></main>';
  }
  function lessonPage(course) {
    const item = current(course);
    const lesson = item.lesson;
    const done = has(state.lessonsDone, course.id);
    const sections = lesson.sections.map(function (section) { return '<h3>' + esc(section.title) + '</h3><p>' + esc(section.text) + '</p>'; }).join("");
    return '<main id="main"><div class="container lesson-shell"><div class="breadcrumbs"><a href="#/catalog">' + esc(T().catalog) + '</a><span>›</span><a href="#/course/' + escAttr(course.id) + '">' + esc(item.title) + '</a><span>›</span><span>' + esc(T().lessonLabel) + '</span></div>' +
      '<div class="lesson-header"><div class="eyebrow">' + esc(T().lessonLabel) + ' · ' + esc(tracks[course.track][state.language]) + '</div><h1>' + esc(lesson.title) + '</h1><p>' + esc(item.title) + '</p></div>' +
      '<article class="lesson-card"><div class="lesson-lead">' + esc(lesson.lead) + '</div><div class="lesson-content">' + sections +
      '<div class="practice-box"><strong>' + esc(T().practice) + '</strong><p>' + esc(lesson.practice) + '</p></div></div>' +
      '<div class="lesson-footer"><a class="button button-secondary button-small" href="#/course/' + escAttr(course.id) + '">← ' + esc(T().backCourse) + '</a>' +
      '<button class="button button-primary button-small" data-action="complete-lesson" data-id="' + escAttr(course.id) + '">' + esc(done ? T().lessonDone + " · " + T().goToQuiz : T().markComplete) + ' <span class="button-arrow">↗</span></button></div></article></div></main>';
  }
  function quizPage(course) {
    const item = current(course);
    const hasScore = Object.prototype.hasOwnProperty.call(state.quizScores, course.id);
    const score = hasScore ? Number(state.quizScores[course.id]) : 0;
    const passed = has(state.quizzesPassed, course.id);
    const result = hasScore ? '<div class="quiz-result visible ' + (passed ? "pass" : "retry") + '" role="status"><strong>' + esc(passed ? T().quizPass : T().quizRetry) + '</strong><br>' +
      esc(T().quizScore) + ': ' + score + " " + esc(T().of) + ' 3. ' + esc(passed ? T().resultPassed : T().resultRetry) + '</div>' : "";
    const questions = item.quiz.map(function (question, index) {
      return '<fieldset class="quiz-question"><legend>' + (index + 1) + ". " + esc(question.q) + '</legend>' +
        question.options.map(function (option, optionIndex) {
          return '<label class="answer-option"><input type="radio" name="q' + index + '" value="' + optionIndex + '"><span>' + esc(option) + '</span></label>';
        }).join("") + '</fieldset>';
    }).join("");
    return '<main id="main"><div class="container lesson-shell"><div class="breadcrumbs"><a href="#/course/' + escAttr(course.id) + '">' + esc(item.title) + '</a><span>›</span><span>' + esc(T().quizTitle) + '</span></div>' +
      '<div class="lesson-header"><div class="eyebrow">' + esc(T().demoLabel) + '</div><h1>' + esc(T().quizTitle) + '</h1><p>' + esc(T().quizIntro) + '</p></div>' +
      '<form class="quiz-card" data-quiz-course="' + escAttr(course.id) + '">' + result + '<p class="quiz-error">' + esc(T().quizNeedAnswers) + '</p>' + questions +
      '<div class="page-actions"><button class="button button-primary" type="submit">' + esc(T().checkAnswers) + ' <span class="button-arrow">↗</span></button>' +
      '<a class="button button-secondary" href="#/lesson/' + escAttr(course.id) + '">' + esc(T().lessonLabel) + '</a></div></form>' +
      (passed ? '<div class="container page-actions" style="max-width:800px"><a class="button button-secondary button-small" href="#/dashboard">' + esc(T().toDashboard) + ' ↗</a></div>' : '') +
      '</div></main>';
  }
  function missingPage() {
    return '<main id="main"><div class="container page-intro"><div class="eyebrow">' + esc(T().demoLabel) + '</div><h1>' + esc(T().courseNotFound) + '</h1><a class="button button-primary button-small" href="#/catalog">' + esc(T().backCatalog) + ' ↗</a></div></main>';
  }
  function render(options) {
    const currentRoute = getRoute();
    let body;
    if (currentRoute.page === "home") body = homePage();
    else if (currentRoute.page === "catalog") body = catalogPage();
    else if (currentRoute.page === "dashboard") body = dashboardPage();
    else {
      const course = courseById(currentRoute.id);
      if (!course) body = missingPage();
      else if (currentRoute.page === "course") body = coursePage(course);
      else if (currentRoute.page === "lesson") body = lessonPage(course);
      else body = quizPage(course);
    }
    document.documentElement.lang = state.language;
    document.title = state.language === "ru" ? "Институт цифровизации и инноваций — учебная платформа" : "Цифрландыру және инновациялар институты — оқу платформасы";
    document.getElementById("app").innerHTML = header(currentRoute.page) + body + footer() + '<div id="toast" class="notice-toast" role="status" aria-live="polite"></div>';
    const skip = document.querySelector(".skip-link");
    if (skip) skip.textContent = T().skip;
    bindFilters();
    if (currentRoute.page === "catalog" && pendingTrack) {
      const filter = document.getElementById("track-filter");
      if (filter) { filter.value = pendingTrack; filter.dispatchEvent(new Event("change")); }
      pendingTrack = "";
    }
    if (!options || options.scroll !== false) window.scrollTo(0, 0);
  }
  function bindFilters() {
    const search = document.getElementById("course-search");
    const track = document.getElementById("track-filter");
    const audience = document.getElementById("audience-filter");
    if (!search || !track || !audience) return;
    function update() {
      const query = search.value.trim().toLowerCase();
      let count = 0;
      Array.from(document.querySelectorAll("[data-course-card]")).forEach(function (el) {
        const match = (!query || el.dataset.search.indexOf(query) !== -1) &&
          (!track.value || el.dataset.track === track.value) &&
          (!audience.value || el.dataset.audience.split(",").indexOf(audience.value) !== -1);
        el.hidden = !match;
        if (match) count += 1;
      });
      document.getElementById("result-count").textContent = T().resultCount + ": " + count;
      document.getElementById("empty-state").classList.toggle("visible", count === 0);
      document.getElementById("catalog-grid").style.display = count === 0 ? "none" : "grid";
    }
    search.addEventListener("input", update);
    track.addEventListener("change", update);
    audience.addEventListener("change", update);
  }
  function toast(message) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("visible"); }, 2500);
  }
  const app = document.getElementById("app");
  app.addEventListener("click", function (event) {
    const jump = event.target.closest("[data-track-jump]");
    if (jump) pendingTrack = jump.dataset.trackJump;
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === "language") {
      state.language = button.dataset.value === "kk" ? "kk" : "ru";
      saveState(); render({ scroll: false });
    } else if (action === "enroll" && courseById(id)) {
      if (!has(state.enrolled, id)) state.enrolled.push(id);
      saveState(); render({ scroll: false }); toast(T().enrolled);
    } else if (action === "open-course-step" && courseById(id)) {
      window.location.hash = "#/" + (button.dataset.route || "lesson") + "/" + encodeURIComponent(id);
    } else if (action === "complete-lesson" && courseById(id)) {
      if (!has(state.enrolled, id)) state.enrolled.push(id);
      if (!has(state.lessonsDone, id)) state.lessonsDone.push(id);
      saveState(); window.location.hash = "#/quiz/" + encodeURIComponent(id);
    } else if (action === "reset-progress") {
      if (window.confirm(T().clearConfirm)) {
        state.enrolled = []; state.lessonsDone = []; state.quizzesPassed = []; state.quizScores = {};
        saveState(); render({ scroll: false }); toast(T().resetDemo);
      }
    } else if (action === "reset-filters") {
      const search = document.getElementById("course-search");
      const track = document.getElementById("track-filter");
      const audience = document.getElementById("audience-filter");
      if (search) search.value = "";
      if (track) track.value = "";
      if (audience) audience.value = "";
      if (search) search.dispatchEvent(new Event("input"));
    }
  });
  app.addEventListener("submit", function (event) {
    const form = event.target.closest("[data-quiz-course]");
    if (!form) return;
    event.preventDefault();
    const id = form.dataset.quizCourse;
    const course = courseById(id);
    const error = form.querySelector(".quiz-error");
    const answers = [];
    for (let index = 0; index < 3; index += 1) {
      const selected = form.querySelector('input[name="q' + index + '"]:checked');
      if (!selected) { if (error) error.classList.add("visible"); return; }
      answers.push(Number(selected.value));
    }
    if (error) error.classList.remove("visible");
    const right = current(course).quiz.reduce(function (total, question, index) { return total + (answers[index] === question.answer ? 1 : 0); }, 0);
    const oldBest = Number(state.quizScores[id] || 0);
    state.quizScores[id] = Math.max(oldBest, right);
    if (right >= 2 && !has(state.quizzesPassed, id)) state.quizzesPassed.push(id);
    saveState(); render({ scroll: false });
    const result = document.querySelector(".quiz-result");
    if (result) result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  window.addEventListener("hashchange", function () { render(); });
  render();
})();
