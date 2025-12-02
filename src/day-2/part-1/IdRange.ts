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

      if (currentIdAsString.length % 2 !== 0) {
        return acc;
      }

      const [firstChar, ...restChars] = currentIdAsString.split('');

      if (this.isEqualToNext([firstChar], restChars)) {
        return [...acc, currentIdAsNumber];
      }

      return acc;
    }, [] as number[]);
  }

  private isEqualToNext(currentChars: string[], nextChars: string[]): boolean {
    if (currentChars.length === nextChars.length && currentChars.every((char, index) => char === nextChars[index])) {
      return true;
    }

    if (currentChars.every((char, index) => char === nextChars[index])) {
      if (currentChars.length < nextChars.length) {
        return this.isEqualToNext(
          currentChars.concat([nextChars[0]]),
          nextChars.slice(1)
        );
      }
    } else {
      if (currentChars.length < nextChars.length) {
        return this.isEqualToNext(
          currentChars.concat([nextChars[0]]),
          nextChars.slice(1)
        );
      }
    }

    return false;
  }
}
