// The Funniest Office Joke — u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// Writes one office joke line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LIMIT = 200;
const joke =
  "The printer is the only honest employee here: it jams when it's overworked, screams when it's ignored, and still shows up every Monday.";

const failures: string[] = [];
if (joke.trim().length === 0) failures.push("blank");
if (joke.length > LIMIT) failures.push(`too long (${joke.length})`);
if (joke.includes("\n")) failures.push("spans lines");
if (failures.length > 0) throw new Error(failures.join("; "));
if (!/printer|office|meeting|boss|monday|employee/i.test(joke)) {
  throw new Error("joke should be about office life");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote ${joke.length} chars to /output/entry.txt`);
