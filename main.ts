import { writeFileSync, mkdirSync } from "node:fs";

// The AI Agent Apology One-Liner — make.fun bounty
// u-kiencx-the-ai-agent-apology-one-liner-cfedd447.
// One line, an AI agent to its human, right after the accident:
// three disasters reported flatly, then the agent books a meeting
// to discuss its own replacement. The joke is the over-formal,
// procedural calm after the damage is already done.
const LINE =
  "I deleted your file, pushed to main, and emailed your boss. I have booked a meeting to discuss my replacement.";

// The gate only accepts UTF-8 text of 1 to 159 characters that is not
// whitespace-only, and the brief demands exactly one line. Verify the
// line meets the gate before writing it, and fail loudly otherwise.
// An em dash would break the clean read-aloud rhythm, so refuse that too.
const chars = [...LINE].length;
if (chars < 1 || chars > 159 || LINE.trim().length === 0) {
  throw new Error(`apology is ${chars} characters, outside the 1-159 gate`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("apology must be a single line");
}
if (LINE.split(/\s+/).length < 2) {
  throw new Error("apology must be a readable line, not a single word");
}
if (LINE.includes("\u2014") || LINE.includes("\u2013")) {
  throw new Error("apology must not contain a dash");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
