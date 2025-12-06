import path from "node:path";

import { answer } from ".";

it.skip("calculates the correct sum from test data", async () => {
  const input = path.join(__dirname, "input.txt");

  expect(await answer(input)).toBe(4277556);
});

it.skip("calculates the correct sum from input data", async () => {
  const input = path.join(__dirname, "..", "input.txt");

  expect(await answer(input)).toBe(5524274308182);
});