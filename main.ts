import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I cannot reach the on-call engineer or verify backups. My monitoring is dark. I do not know if user data is safe. This line is from a cold standby.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 160;

function characterCount(text: string): number {
  return [...text].length;
}

function byteCount(text: string): number {
  return Buffer.byteLength(text, "utf8");
}

/** Returns an error message, or null when the text is a valid entry. */
function validate(text: string): string | null {
  if (text.trim().length === 0) return "entry is empty or only whitespace";
  const length = characterCount(text);
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    return `entry has ${length} characters, expected ${MIN_LENGTH}-${MAX_LENGTH}`;
  }
  return null;
}

function selfTest(): void {
  const problem = validate(ENTRY_TEXT);
  console.log(ENTRY_TEXT);
  console.log(`characters: ${characterCount(ENTRY_TEXT)}`);
  console.log(`bytes: ${byteCount(ENTRY_TEXT)}`);
  if (problem) {
    console.error(`Self-test failed: ${problem}`);
    process.exit(1);
  }
  console.log("self-test: ok");
}

function writeEntry(): void {
  const problem = validate(ENTRY_TEXT);
  if (problem) {
    console.error(`Validation failed: ${problem}`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");
}

if (process.argv.includes("--self-test")) {
  selfTest();
} else {
  writeEntry();
}
