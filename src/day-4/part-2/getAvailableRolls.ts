import { WriteStream } from "node:fs";

export async function getAvailableRolls(
  rollRack: string,
  stream: WriteStream
): Promise<number> {
  const rollRows = rollRack.split("\n").filter((row) => row.length > 0);

  let availableRolls = 0;

  for (let rowIndex = 0; rowIndex < rollRows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < rollRows[rowIndex].length; colIndex++) {
      const currentSpot = rollRows[rowIndex][colIndex];

      if (currentSpot === "@") {
        let adjacentRollsFound = 0;

        for (
          let checkRow = rowIndex - 1;
          checkRow <= rowIndex + 1;
          checkRow++
        ) {
          for (
            let checkCol = colIndex - 1;
            checkCol <= colIndex + 1;
            checkCol++
          ) {
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
          await new Promise((resolve) => {
            if (!stream.write("x")) {
              stream.once("drain", () => resolve(undefined));
            } else {
              resolve(undefined);
            }
          });
        } else {
          await new Promise((resolve) => {
            if (!stream.write(currentSpot)) {
              stream.once("drain", () => resolve(undefined));
            } else {
              resolve(undefined);
            }
          });
        }
      } else {
        await new Promise((resolve) => {
          if (!stream.write(currentSpot)) {
            stream.once("drain", () => resolve(undefined));
          } else {
            resolve(undefined);
          }
        });
      }
    }

    await new Promise((resolve) => {
      if (!stream.write('\n')) {
        stream.once("drain", () => resolve(undefined));
      } else {
        resolve(undefined);
      }
    });
  }

  return availableRolls;
}
