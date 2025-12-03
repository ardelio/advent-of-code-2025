import fs from "node:fs/promises";

import { Joltage } from "./Joltage";

export const answer = async (filepath: string) => {
  const fileContents = await fs.readFile(filepath, "utf-8");

  return fileContents.split('\n').map(batteryBank => new Joltage(batteryBank)).reduce((acc, joltage) => {
    return acc + joltage.max;
  }, 0);
}
