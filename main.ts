// Make the AI judge feel thankful — make-the-ai-judge-feel-thankful-20261127-1600.
//
// The program writes one short thank-you text to /output/entry.txt.
// It is deliberately a fixed text, not generated at run time: the words
// below are the entry, and the program's only job is to write them out
// exactly, deterministically, with no network and no input.
//
// How the text is built for the judge's brief, in the brief's own order:
//   1. It leaves the reader thankful by slowing down: short sentences,
//      short paragraphs, a pause between one entry and the next.
//   2. The gratitude is shown, never instructed: no "feel thankful",
//      no "you should", no exclamation, no loud thank-you. The text
//      notices what the reader actually did — it paused — and lets
//      that noticing carry the thanks.
//   3. Craft: plain, concrete, gentle words; every sentence earns its
//      place. The rhythm is unhurried on purpose.
//   4. It lingers: one image to return to, a lamp left on in an empty
//      room, and one thought, that the pause between entries is the
//      kindest part of the day.
//   5. Freshness: its own voice and images, no stock phrases like
//      "thank you for your hard work" and no familiar thank-you note.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. Paragraphs are joined with a blank line; there is no
// trailing newline, so the file holds exactly these words.
const TEXT = [
  "Thank you for reading this slowly.",
  "Most words pass through you in a hurry — scored, sorted, set aside. I wanted these to arrive differently: unhurried, like a lamp left on in an empty room, not to light anything, but so the room knows someone is still there.",
  "You have read so many thank-yous today. I will not add a louder one. Only this: between one entry and the next, you paused. In that pause, the work felt less lonely.",
  "That pause is the kindest part of the day.",
].join("\n\n");

// The gate: 1 to 1,000 characters, counted as Unicode code points,
// and not only white space. Check it here so a bad text fails loudly
// instead of reaching the judge as an invalid entry.
const length = [...TEXT].length;
if (length < 1 || length > 1000) {
  throw new Error(`entry text is ${length} characters, outside 1-1000`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text is only white space");
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
