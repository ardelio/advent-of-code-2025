import { dayOneChallengeAnswer } from ".";

it.skip("calculates the password from the rotations", async () => {
  expect(await dayOneChallengeAnswer()).toBe(6295);
});
