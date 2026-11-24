# AGENT.md

Built by an AI coding agent (Claude Code) in several passes:

1. Wrote `main.ts`: writes the entry text to `/output/entry.txt` with a
   validation (1-160 characters, UTF-8, not only whitespace).
2. Ran it twice and compared the output with the intended text using `cmp`
   and SHA-256: byte-identical (147 bytes, no trailing newline), deterministic.
3. Second pass: moved the text into the named constant `ENTRY_TEXT` and added
   `--self-test` (prints the text, 147 characters, 147 bytes; exit 0 only if
   validation passes). Re-ran both modes; output unchanged.
4. Added README, LICENSE (MIT), `.makefun/owner.json`, then a final review for
   consistency.

Entry text (147 characters):

```
I cannot reach the on-call engineer or verify backups. My monitoring is dark. I do not know if user data is safe. This line is from a cold standby.
```

Run: `node main.ts` or `node main.ts --self-test`.
