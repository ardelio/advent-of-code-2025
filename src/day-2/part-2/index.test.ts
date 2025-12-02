import path from "node:path";

import { dayTwoPartTwoChallengeAnswer } from ".";

it.only("calculates the correct sum of invalid IDs for challenge", async () => {
  const filepath = path.join(__dirname, '..', 'input.txt');
  expect(await dayTwoPartTwoChallengeAnswer(filepath)).toBe(69553832684);
});

it("calculates the correct sum of invalid IDs for AC", async () => {
  const filepath = path.join(__dirname, 'input.txt');
  expect(await dayTwoPartTwoChallengeAnswer(filepath)).toBe(4174379265);
});