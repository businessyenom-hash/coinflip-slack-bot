const test = require("node:test");
const assert = require("node:assert/strict");

const { coinFlip, rollDie, helpText } = require("../src/games");

test("coinFlip returns HEADS for a value below 0.5", () => {
  assert.equal(coinFlip(() => 0), "HEADS");
  assert.equal(coinFlip(() => 0.499999), "HEADS");
});

test("coinFlip returns TAILS for a value at or above 0.5", () => {
  assert.equal(coinFlip(() => 0.5), "TAILS");
  assert.equal(coinFlip(() => 0.999999), "TAILS");
});

test("rollDie maps random values to 1 through 6", () => {
  assert.equal(rollDie(() => 0), 1);
  assert.equal(rollDie(() => 0.5), 4);
  assert.equal(rollDie(() => 0.999999), 6);
});

test("helpText lists every registered Slack command", () => {
  const text = helpText();

  assert.match(text, /\/coin-flip-flip/);
  assert.match(text, /\/coin-flip-dice/);
  assert.match(text, /\/coin-flip-help/);
});
