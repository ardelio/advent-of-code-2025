export class IdRange {
  private _startingId: string;
  private _endingId: string;

  constructor(_range: string) {
    [this._startingId, this._endingId] = _range.split("-");
  }

  get startingId(): string {
    return this._startingId;
  }

  get endingId(): string {
    return this._endingId;
  }

  invalidIdSum(): number {
    const invalidIds: number[] = this.findInvalidIds();

    return invalidIds.reduce((acc, id) => acc + id, 0);
  }

  findInvalidIds(): number[] {
    const length =
      parseInt(this._endingId, 10) - parseInt(this._startingId, 10) + 1;

    return new Array<number>(length).fill(0).reduce((acc, _, index) => {
      const currentIdAsNumber = parseInt(this._startingId, 10) + index;
      const currentIdAsString = currentIdAsNumber.toString();
      const currentIdAsArray = currentIdAsString
        .split("")
        .map((char) => parseInt(char, 10));

      for (let i = 1; i <= currentIdAsArray.length / 2; i++) {
        const left = currentIdAsArray.slice(0, i);
        const remainingChunks = this.chunkArray(currentIdAsArray.slice(i), i);

        if (
          remainingChunks.every((chunk) => chunk.join("") === left.join(""))
        ) {
          return [...acc, currentIdAsNumber];
        }
      }

      return acc;
    }, [] as number[]);
  }

  private chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }

    return chunks;
  }
}
