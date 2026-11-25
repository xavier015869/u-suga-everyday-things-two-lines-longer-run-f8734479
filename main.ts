// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation of a queue to /output/entry.txt.
// Line 1 explains the everyday thing to a 10-year-old with one vivid analogy.
// Line 2 says, in one sentence, what that analogy maps and what it leaves out.

import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "A queue is a slow human train with no engine, where every person is a carriage that can only roll forward when the carriage in front of it moves.\n" +
  "It works because a queue really does move one person at a time in a fixed order like carriages, but it leaves out that people can step out, chat, or swap places, while real carriages are bolted in line and never can.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
