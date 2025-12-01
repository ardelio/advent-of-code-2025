type Direction = "L" | "R";

class Rotation {
  constructor(private _direction: Direction, private _amount: number) {}

  get direction(): Direction {
    return this._direction;
  }

  get amount(): number {
    return this._amount;
  }
}

export class Rotations {
  static async load(data: string): Promise<Rotations> {
    const rotations = data
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const direction = line.slice(0, 1);
        const amountStr = line.slice(1);
        const amount = parseInt(amountStr, 10);
        return new Rotation(direction as Direction, amount);
      });

    return new Rotations(rotations);
  }

  constructor(private rotations: Rotation[]) {}

  get length(): number {
    return this.rotations.length;
  }

  get(index: number): Rotation {
    return this.rotations[index];
  }

  calculatePassword(startingNumber: number): number {
    const result = this.rotations.reduce((acc, rotation) => {
      let { currentNumber } = acc;

      if (rotation.direction === "L") {
        currentNumber = (currentNumber - rotation.amount + 100) % 100;
      } else {
        currentNumber = (currentNumber + rotation.amount) % 100;
      }

      return {
        counter: currentNumber === 0 ? acc.counter + 1 : acc.counter,
        currentNumber,
      }
    }, { counter: 0, currentNumber: startingNumber });

    return result.counter;
  }
}
