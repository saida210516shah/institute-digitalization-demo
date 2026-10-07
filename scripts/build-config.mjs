import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
try {
  const lines = await readFile(resolve(root, ".env"), "utf8");
  for (const line of lines.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!match || process.env[match[1]] !== undefined) continue;
    process.env[match[1]] = match[2].replace(/^(["'])(.*)\1$/, "$2");
  }
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const config = {
  url: process.env.SUPABASE_URL || "",
  key: process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || ""
};

function isSecretKey(key) {
  if (key.startsWith("sb_secret_")) return true;
  const parts = key.split(".");
  if (parts.length !== 3) return false;
  try {
    return JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8")).role === "service_role";
  } catch {
    return false;
  }
}

if (config.key && isSecretKey(config.key)) {
  throw new Error("Refusing to publish a Supabase secret/service_role key in browser code.");
}

await writeFile(
  resolve(root, "dist", "supabase-config.js"),
  "window.IDI_SUPABASE_CONFIG = " + JSON.stringify(config) + ";\n",
  "utf8"
);

console.log(config.url && config.key
  ? "Supabase public configuration written to dist/supabase-config.js."
  : "Supabase is not configured; wrote an empty public configuration.");
