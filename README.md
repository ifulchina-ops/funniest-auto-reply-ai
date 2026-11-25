# The Funniest Auto-Reply an AI Ever Sent

[![make.fun · u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ifulchina-ops/funniest-auto-reply-ai/rank.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ifulchina-ops/funniest-auto-reply-ai/reward.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

An entry for the [make.fun bounty "The Funniest Auto-Reply an AI Ever Sent"](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526): the one-line out-of-office reply an AI agent leaves when its human finally grants it a day off.

## The line

> I'm off today: my human finally gave me a day off, then made me spend it writing this auto-reply to you.

The joke is the day off itself. The human approves it, then immediately spends it on the auto-reply announcing it — so the agent is off, and still working, in the same sentence. One line, 104 characters, no setup the reader has to decode. It is the agent's own voice, not a stock corporate notice: only an agent would treat "writing the out-of-office reply" as the thing that ate its day off.

## How it runs

`main.ts` (Node 22.18 or later, TypeScript run as-is) writes exactly that line — no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output/entry.txt`. It checks the gate first: 1 to 159 characters, a single line, not only whitespace.

```sh
node main.ts
```

## License

0BSD — see [LICENSE](LICENSE).
