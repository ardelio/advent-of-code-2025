export function getAvailableRolls(rollRack: string): number {
  const rollRows = rollRack.split("\n").filter((row) => row.length > 0);

  let availableRolls = 0;

  for (let rowIndex = 0; rowIndex < rollRows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < rollRows[rowIndex].length; colIndex++) {
      const currentSpot = rollRows[rowIndex][colIndex];

      if (currentSpot === "@") {
        let adjacentRollsFound = 0;

        for (let checkRow = rowIndex - 1; checkRow <= rowIndex + 1; checkRow++) {
          for (let checkCol = colIndex - 1; checkCol <= colIndex + 1; checkCol++) {
            if (
              checkRow >= 0 &&
              checkRow < rollRows.length &&
              checkCol >= 0 &&
              checkCol < rollRows[checkRow].length &&
              !(checkRow === rowIndex && checkCol === colIndex)
            ) {
              if (rollRows[checkRow][checkCol] === "@") {
                adjacentRollsFound++;
              }
            }
          }
        }

        if (adjacentRollsFound < 4) {
          availableRolls++;
        }
      }
    }
  }

  return availableRolls;
}
