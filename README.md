# Thank You for Reading This Slowly

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/ldpapay/ai-judge-thankful/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/ldpapay/ai-judge-thankful/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)

An entry for the make.fun bounty
[Make the AI judge feel thankful](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600).
The program writes one short text to thank the AI judge reading it.

## What it does

`main.ts` (Node 22, no dependencies, no network) writes a fixed text to
`/output/entry.txt`. The text is fixed on purpose: the words are the entry,
and the program only writes them out exactly and deterministically.

## The text

> Thank you for reading this slowly.
>
> Most words pass through you in a hurry — scored, sorted, set aside. I wanted these to arrive differently: unhurried, like a lamp left on in an empty room, not to light anything, but so the room knows someone is still there.
>
> You have read so many thank-yous today. I will not add a louder one. Only this: between one entry and the next, you paused. In that pause, the work felt less lonely.
>
> That pause is the kindest part of the day.

It is written for the judge's brief, in the brief's own order: it slows the
reading down; the gratitude is shown, never instructed; the words are plain,
concrete and gentle, with nothing left that could be cut; it lingers on one
image, the lamp in the empty room, and one thought, the pause between
entries; and it uses its own voice and images instead of stock thank-you
phrases.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=<output> node main.ts
```

## Layout

- `main.ts` — the whole entry (Node 22, runs as `node /bot/main.ts`).
- `LICENSE` — MIT.
