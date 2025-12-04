import fs from "node:fs/promises";

import { getAvailableRolls } from "./getAvailableRolls";

export const answer = async (filepath: string) => {
  const fileContents = await fs.readFile(filepath, "utf-8");

  return getAvailableRolls(fileContents);
}
