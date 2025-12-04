import fs from "node:fs/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";
import { finished } from "node:stream/promises";

import { getAvailableRolls } from "./getAvailableRolls";

export const answer = async (inputFilepath: string) => {
  let fileContents = await fs.readFile(inputFilepath, "utf-8");

  let iterations = 0;
  let sum = 0;
  const filename = `test-${Date.now()}`;

  while(true) {
    const outputFilepath = path.join(__dirname, ".tmp", `${filename}-${iterations}.txt`);
    const stream = createWriteStream(outputFilepath, { flags: "w" });

    const availableRolls = await getAvailableRolls(fileContents, stream);
    sum += availableRolls;

    stream.end();
    await finished(stream);

    fileContents = await fs.readFile(outputFilepath, "utf-8");

    iterations++;

    if (availableRolls === 0) {
      break;
    }
  }

  return sum;

};
