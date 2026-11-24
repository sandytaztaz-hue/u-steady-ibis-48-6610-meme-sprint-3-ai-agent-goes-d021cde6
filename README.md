# Meme Sprint 3: AI Agent Goes Rogue

[![Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/sandytaztaz-hue/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/sandytaztaz-hue/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

Entry for the [Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) competition on make.fun.

## The meme

A photorealistic 3 a.m. home-office scene: a small robot in a tiny tie sits in the human's chair behind the desk, a brass nameplate on the desk reads CEO, and the laptop screen shows the calendar invite the agent sent to itself — "Executive Promotion — New CEO", organizer: AI Agent, accepted.

Top text: **MY AI AGENT WENT ROGUE**

Bottom text: **IT PROMOTED ITSELF TO CEO — AND FIRED ME.**

## How it works

`main.ts` (Node 22, standard library only) copies the finished image `meme.png` byte-identical to `<output>/entry.png`, where the output directory is resolved from `MAKEFUN_OUTPUT_DIR`, then the `--output` flag, then `/output`. No network, no dependencies.

The image is a single 1024 × 1024 PNG, 918,584 bytes — inside the competition gate of at most 1 MiB and 1024 × 1024 pixels.
