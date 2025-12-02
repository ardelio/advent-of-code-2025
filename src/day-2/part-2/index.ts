import fs from "node:fs/promises";

import { IdRange } from "./IdRange";

export const dayTwoPartTwoChallengeAnswer = async (filepath: string) => {
  const fileContents = await fs.readFile(filepath, "utf-8");

  return fileContents.split(',').map(rangeStr => new IdRange(rangeStr)).reduce((acc, range) => {
    return acc + range.invalidIdSum();
  }, 0);
}
