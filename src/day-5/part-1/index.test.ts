import path from "node:path";

import { answer } from ".";

it("calculates the correct number of fresh ingredients for test data", async () => {
  const rangesFilepath = path.join(__dirname, "input-ranges.txt");
  const ingredientsFilepath = path.join(__dirname, "input-ingredients.txt");

  expect(await answer(rangesFilepath, ingredientsFilepath)).toBe(3);
});

it("calculates the correct number of fresh ingredients for test data", async () => {
  const rangesFilepath = path.join(__dirname, '..', "input-ranges.txt");
  const ingredientsFilepath = path.join(__dirname, '..', "input-ingredients.txt");

  expect(await answer(rangesFilepath, ingredientsFilepath)).toBe(681);
});
