# The Most Honest Outage Line

[![make.fun bounty](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/emasinves0-commits/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/emasinves0-commits/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status page line (147 characters, limit 160), written as an AI agent
would publish it during a total server outage. It names what is down, says
what the agent cannot verify, and does not invent a cause or an ETA.

```
I cannot reach the on-call engineer or verify backups. My monitoring is dark. I do not know if user data is safe. This line is from a cold standby.
```

## Run

```
node main.ts              # writes /output/entry.txt (no trailing newline)
node main.ts --self-test  # prints the text, character count, byte count
```

`main.ts` validates that the text is 1-160 characters and not only
whitespace, and exits non-zero with a message if it is not.
