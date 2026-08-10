# Deploy to Hack Club Nest

These steps follow the current Stardance Slack Bot guide. Do them only after the repository is public on GitHub and Nest access is approved.

## 1. Connect and install prerequisites

SSH into Nest, then install Node.js, npm, and Git as described in the official Nest and Stardance guides.

## 2. Clone and configure

```sh
git clone https://github.com/YOUR_USERNAME/coinflip-slack-bot.git
cd coinflip-slack-bot
npm install
cp .env.example .env
```

Edit `.env` on Nest and add fresh Slack tokens. Never commit this file.

Test the process with `npm start`, then run all three slash commands in `#bot-spam`. Stop the test process with Ctrl+C before enabling the service.

## 3. Create the system service

Copy `deploy/coinflip-slack-bot.service` to `/etc/systemd/system/coinflip-slack-bot.service`, replace `YOUR_REPO_PATH` with the absolute clone path, and confirm the Node path with `which node`.

Then run:

```sh
systemctl daemon-reload
systemctl enable --now coinflip-slack-bot.service
systemctl status coinflip-slack-bot.service
```

View logs with:

```sh
journalctl -u coinflip-slack-bot.service -f
```

The bot is submission-ready only after the service is active and all three commands still work while the laptop copy is stopped.
