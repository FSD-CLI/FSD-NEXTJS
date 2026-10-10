import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? ".");
const read = (file) =>
  JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const config = read("fsd.config.json");
const expected = {
  schemaVersion: 1,
  framework: "nextjs",
  packageManager: "npm",
  apiClient: "axios",
  serverState: "react-query",
  clientState: "zustand",
  forms: "react-hook-form-zod",
  ui: "shared-ui",
};
for (const [key, value] of Object.entries(expected)) {
  assert.equal(config[key], value, `Template config mismatch: ${key}`);
}
const pkg = read("package.json");
for (const dependency of [
  "next",
  "react",
  "react-dom",
  "axios",
  "@tanstack/react-query",
  "zustand",
  "react-hook-form",
  "zod",
]) {
  assert.ok(
    pkg.dependencies?.[dependency],
    `Missing dependency: ${dependency}`,
  );
}
assert.equal(
  pkg.dependencies.react,
  pkg.dependencies["react-dom"],
  "React versions differ",
);
for (const layer of [
  "app",
  "pages",
  "widgets",
  "features",
  "entities",
  "shared",
]) {
  assert.ok(
    fs.statSync(path.join(root, "src", layer)).isDirectory(),
    `Missing layer: ${layer}`,
  );
}
for (const file of [
  "src/app/page.route.tsx",
  "src/app/layout.route.tsx",
  "src/pages/home/index.ts",
]) {
  assert.ok(
    fs.statSync(path.join(root, file)).isFile(),
    `Missing route contract: ${file}`,
  );
}
assert.deepEqual(read("tsconfig.json").compilerOptions.paths["@/*"], [
  "./src/*",
]);
console.log("Next.js template contract passed.");
