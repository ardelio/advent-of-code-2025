import fs from "node:fs/promises";
import path from "node:path";

import { Rotations } from "./Rotations";

export const dayOneChallengeAnswer = async () => {
  const filepath = path.join(__dirname, "input.txt");

  const fileContents = await fs.readFile(filepath, "utf-8");

  const rotations = await Rotations.load(fileContents);

  const startingNumber = 50;

  return rotations.calculatePassword(startingNumber);
}
