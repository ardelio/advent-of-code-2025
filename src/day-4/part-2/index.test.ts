import path from "node:path";

import { answer } from ".";

it("calculates the correct sum available rolls", async () => {
  const filepath = path.join(__dirname, '..', 'input.txt');
  expect(await answer(filepath)).toBe(8665);
}, 30000);

it("calculates the correct sum available rolls for test input", async () => {
  const filepath = path.join(__dirname, 'input.txt');
  expect(await answer(filepath)).toBe(43);
});
