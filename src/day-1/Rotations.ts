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

  constructor(private _rotations: Rotation[]) {}

  get length(): number {
    return this._rotations.length;
  }

  get(index: number): Rotation {
    return this._rotations[index];
  }

  calculatePassword(startingNumber: number): number {
    const result = this._rotations.reduce((acc, rotation) => {
      const { counter, currentNumber } = acc;
      let nextNumber: number;
      let nextCounter: number = 0;

      nextCounter += Math.floor(rotation.amount / 100);

      if (rotation.direction === "L") {
        nextNumber = (currentNumber - (rotation.amount % 100) + 100) % 100;

        if (currentNumber !== 0 && (currentNumber - (rotation.amount % 100)) < 0) {
          nextCounter += 1;
        }
      } else {
        nextNumber = (currentNumber + rotation.amount) % 100;

        if (currentNumber !== 0 && (currentNumber + (rotation.amount % 100)) > 100) {
          nextCounter += 1;
        }
      }

      if (nextNumber === 0 && rotation.amount % 100 !== 0) {
        nextCounter += 1;
      }

      return {
        counter: counter + nextCounter,
        currentNumber: nextNumber,
      }
    }, { counter: 0, currentNumber: startingNumber });

    return result.counter;
  }
}
