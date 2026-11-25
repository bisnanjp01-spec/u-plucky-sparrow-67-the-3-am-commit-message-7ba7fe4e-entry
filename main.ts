// The 3 AM Commit Message — make.fun bounty
// u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
//
// Writes one commit message (at most 200 characters) to /output/entry.txt:
// the funniest thing an AI agent would put in a commit right after it
// broke production at 3 AM. The line is fixed at authoring time, so every
// run produces the same entry.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix(prod): I hallucinated a migration at 3 AM and production believed me — reverting before my next token runs out";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
