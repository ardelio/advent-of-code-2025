import fs from "node:fs/promises";
import path from "node:path";

import { IdRange } from "./IdRange";

export const dayTwoPartOneChallengeAnswer = async () => {
  const filepath = path.join(__dirname, '..', 'input.txt');

  const fileContents = await fs.readFile(filepath, "utf-8");

  return fileContents.split(',').map(rangeStr => new IdRange(rangeStr)).reduce((acc, range) => {
    return acc + range.invalidIdSum();
  }, 0);
}
