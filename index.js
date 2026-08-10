require("dotenv").config({ quiet: true });

const { App } = require("@slack/bolt");
const { coinFlip, rollDie, helpText } = require("./src/games");

const requiredEnvironmentVariables = ["SLACK_BOT_TOKEN", "SLACK_APP_TOKEN"];
const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
  (name) => !process.env[name]
);

if (missingEnvironmentVariables.length > 0) {
  throw new Error(
    `Missing required environment variable(s): ${missingEnvironmentVariables.join(", ")}`
  );
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/coin-flip-flip", async ({ ack, respond }) => {
  await ack();
  await respond(`🪙 *${coinFlip()}*`);
});

app.command("/coin-flip-dice", async ({ ack, respond }) => {
  await ack();
  await respond(`🎲 You rolled a *${rollDie()}*`);
});

app.command("/coin-flip-help", async ({ ack, respond }) => {
  await ack();
  await respond(helpText());
});

(async () => {
  await app.start();
  console.log("Coinflip bot is running!");
})();
