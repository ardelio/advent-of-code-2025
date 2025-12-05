
import fs from "node:fs/promises";

export const answer = async (rangesFilepath: string) => {
  const ranges = await fs.readFile(rangesFilepath, "utf-8");

  const nonOverlappingRanges = ranges
    .split("\n")
    .reduce((acc, rangeStr) => {
      const [minStr, maxStr] = rangeStr.split("-");
      let min = Number(minStr);
      let max = Number(maxStr);

      for (let i = 0; i < acc.length; i++) {
        const [existingMin, existingMax] = acc[i];

        // No overlap
        if (max < existingMin || min > existingMax) {
          continue;
        }

        // Contained detected
        if (min >= existingMin && max <= existingMax) {
          return acc;
        }

        // Complete overlap detected, remove existing range
        if (min <= existingMin && max >= existingMax) {
          acc.splice(i, 1);
          i--;
          continue;
        }

        // Right partial overlap detected, adjust ranges
        if (min < existingMin && max >= existingMin) {
          max = existingMax;
          acc.splice(i, 1);
          i--;
          continue;
        }

        // Left partial overlap detected, adjust ranges
        if (min <= existingMax && max > existingMax) {
          min = existingMin;
          acc.splice(i, 1);
          i--;
          continue;
        }
      }

      acc.push([min, max]);

      return acc;
    }, [] as [number, number][]);

  const freshIngredients = nonOverlappingRanges.reduce((acc, [min, max]) => {
    return acc + (max - min + 1);
  }, 0);


  return freshIngredients;
};
