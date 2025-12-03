export class Joltage {
  private _batteryBank: number[];

  constructor(batteryBank: string) {
    this._batteryBank = batteryBank.split('').map(Number);
  }

  get max(): number {
    const biggestBattery = Math.max(...this._batteryBank);
    const biggestBatteryIndex = this._batteryBank.indexOf(biggestBattery);

    if (biggestBatteryIndex === this._batteryBank.length - 1) {
      const secondBiggestBattery = Math.max(
        ...this._batteryBank.slice(0, biggestBatteryIndex)
      );
      return secondBiggestBattery * 10 + biggestBattery;
    }

    const nextBiggestBattery = Math.max(...this._batteryBank.slice(biggestBatteryIndex + 1));
    return biggestBattery * 10 + nextBiggestBattery;
  }
}
