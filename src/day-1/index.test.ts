import { dayOneChallengeAnswer } from ".";

it("calculates the password from the rotations", async () => {
  expect(await dayOneChallengeAnswer()).toBe(1052);
});
