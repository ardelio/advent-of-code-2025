import fs from "node:fs/promises";

export const answer = async (inputFilepath: string) => {
  const input = await fs.readFile(inputFilepath, "utf-8");

  const inputArray = input.split("\n");
  const digits = inputArray.slice(0, -1);
  const operators = inputArray[inputArray.length - 1]
    .replace(/\s+/g, "")
    .split("")
    .reverse();

  const lineLength = digits[0].length;

  const equations: number[][] = [];
  let currentEquation: number[] = [];

  for (let i = lineLength - 1; i >= 0; i--) {
    const newNumberParts: string[] = [];
    for (let j = 0; j < digits.length; j++) {
      const char = digits[j].charAt(i);
      newNumberParts.push(char);
    }

    if (newNumberParts.every((char) => char === " ")) {
      if (currentEquation.length > 0) {
        equations.push(currentEquation);
        currentEquation = [];
      }
    } else {
      const newNumber = Number(newNumberParts.join("").trim());
      currentEquation.push(newNumber);
    }
  }
  if (currentEquation.length > 0) {
    equations.push(currentEquation);
  }


  return equations.reduce((rowAcc, digitColumn, index) => {
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
