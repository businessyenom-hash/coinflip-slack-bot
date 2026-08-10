function coinFlip(random = Math.random) {
  return random() < 0.5 ? "HEADS" : "TAILS";
}

function rollDie(random = Math.random) {
  return Math.floor(random() * 6) + 1;
}

function helpText() {
  return [
    "*Coinflip commands*",
    "`/coin-flip-flip` — flip a fair coin",
    "`/coin-flip-dice` — roll a six-sided die",
    "`/coin-flip-help` — show this help message"
  ].join("\n");
}

module.exports = { coinFlip, rollDie, helpText };
