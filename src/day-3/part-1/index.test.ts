import path from "node:path";

import { answer } from ".";

it.skip("calculates the correct sum of invalid IDs for challenge", async () => {
  const filepath = path.join(__dirname, '..', 'input.txt');
  expect(await answer(filepath)).toBe(17095);
});
