import path from "node:path";

import { answer } from ".";

it.skip("calculates the correct number of fresh ingredients for test data", async () => {
  const rangesFilepath = path.join(__dirname, "input-ranges.txt");

  expect(await answer(rangesFilepath)).toBe(14);
});

it.skip("calculates the correct number of fresh ingredients for test data", async () => {
  const rangesFilepath = path.join(__dirname, '..', "input-ranges.txt");

  expect(await answer(rangesFilepath)).toBe(348820208020395);
});
