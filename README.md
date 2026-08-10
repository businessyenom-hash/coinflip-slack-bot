# Coinflip Slack Bot

A deliberately tiny Slack bot built for Hack Club Stardance. It uses Slack Bolt and Socket Mode, has no database, and calls no external APIs.

## Commands

- `/coin-flip-flip` — randomly returns **HEADS** or **TAILS**
- `/coin-flip-dice` — rolls a number from 1 to 6
- `/coin-flip-help` — lists every command

The `coin-flip-` prefix keeps the commands from colliding with other bots in the Hack Club Slack workspace.

## Local setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put the Slack bot token in `SLACK_BOT_TOKEN` and the Socket Mode app token in `SLACK_APP_TOKEN`.
5. Run `npm test`.
6. Run `npm start`.
7. Test the three commands in `#bot-spam` or a private test channel. Do not test in `#stardance`.

Never commit `.env` or paste a Slack token into search, chat, screenshots, devlogs, or GitHub. If a token was exposed, rotate it before using the bot.

## Slack app settings

- Socket Mode: enabled
- App-level scope: `connections:write`
- Bot token scopes: `chat:write`, `commands`, `app_mentions:read`, `channels:history`
- Slash commands: the three commands listed above

## Deploy to Hack Club Nest

The mission requires the bot to remain live when the developer laptop is closed. Follow [DEPLOY.md](DEPLOY.md) after a Nest account is approved and the GitHub repository exists.

## Mission

Built for the [Stardance Make a Slack Bot mission](https://stardance.hackclub.com/missions/slack-bot).
