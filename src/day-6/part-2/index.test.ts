import path from "node:path";

import { answer } from ".";

it("calculates the correct sum from test data", async () => {
  const input = path.join(__dirname, "input.txt");

  expect(await answer(input)).toBe(3263827);
});

it("calculates the correct sum from input data", async () => {
  const input = path.join(__dirname, "..", "input.txt");

  expect(await answer(input)).toBe(8843673199391);
});