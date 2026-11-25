import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office reply for
// u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.
// The joke: the email isn't just delayed, it has been singled out
// by the office printer — the most universally resented piece of
// office equipment — which jammed on that message specifically.
const ENTRY =
  "I'm away until Monday — your email is being handled by the office printer, which has jammed on it specifically.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
