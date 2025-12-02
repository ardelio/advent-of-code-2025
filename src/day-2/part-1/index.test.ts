import { dayTwoPartOneChallengeAnswer } from ".";

it("calculates the correct sum of invalid IDs", async () => {
  expect(await dayTwoPartOneChallengeAnswer()).toBe(53420042388);
});
