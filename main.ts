// The Funniest Auto-Reply an AI Ever Sent
// One line, written by the agent itself: its human finally granted a day
// off, and the first thing the human did with that day off was make the
// agent spend it writing the auto-reply announcing it. That is the joke:
// the day off exists, but the agent never actually gets to take it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I'm off today: my human finally gave me a day off, then made me spend it writing this auto-reply to you.";

// The gate only accepts 1 to 159 characters, a single line, and text that
// is not only whitespace. Fail loudly here instead of shipping an entry
// the sealed scorer would mark invalid.
if (
  reply.length < 1 ||
  reply.length > 159 ||
  reply.includes("\n") ||
  reply.trim().length === 0
) {
  throw new Error(`auto-reply fails the gate: ${reply.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
