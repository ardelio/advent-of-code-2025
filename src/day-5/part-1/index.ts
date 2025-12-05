import fs from "node:fs/promises";

export const answer = async (
  rangesFilepath: string,
  ingredientsFilepath: string
) => {
  const ranges = await fs.readFile(rangesFilepath, "utf-8");
  const ingredientIds = await fs.readFile(ingredientsFilepath, "utf-8");

  return ingredientIds.split("\n").map(Number).reduce((freshIngredients, ingredientId) => {
    for (const rangeStr of ranges.split("\n")) {
      const [minStr, maxStr] = rangeStr.split("-");
      const min = Number(minStr);
      const max = Number(maxStr);

      if (ingredientId >= min && ingredientId <= max) {
        return freshIngredients += 1;
      }
    };

    return freshIngredients;
  }, 0);
};
