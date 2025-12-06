import fs from "node:fs/promises";

export const answer = async (inputFilepath: string) => {
  const input = await fs.readFile(inputFilepath, "utf-8");

  const inputArray = input.split("\n");
  const digits = inputArray.slice(0, -1);
  const operators = inputArray[inputArray.length - 1].replace(/\s+/g, "").split("");

  const transposedDigits = digits.reduce((acc, line) => {
    const digitRow = line
      .replace(/^\s+/g, "")
      .replace(/\s+/g, ",")
      .split(",")
      .map(Number);

    digitRow.forEach((digit, colIndex) => {
      if (!acc[colIndex]) {
        acc[colIndex] = [];
      }
      acc[colIndex].push(digit);
    });

    return acc;
  }, [] as number[][]);

  return transposedDigits.reduce((rowAcc, digitColumn, index) => {
    const operator = operators[index];

    const columnResult = digitColumn.reduce((colAcc, digit) => {
      if (operator === "+") {
        return colAcc + digit;
      } else {
        return colAcc * digit;
      }
    }, operator === "+" ? 0 : 1);

    return rowAcc + columnResult;

  }, 0);
};
