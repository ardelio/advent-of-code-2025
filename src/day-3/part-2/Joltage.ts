const MAX_JOLTAGE_BATTERIES = 12;

export class Joltage {
  private _batteryBank: number[];

  constructor(batteryBank: string) {
    this._batteryBank = batteryBank.split("").map(Number);
  }

  get max(): number {
    const selectedBatteries: number[] = [];

    let lastIndex = 0;

    while (selectedBatteries.length < MAX_JOLTAGE_BATTERIES) {
      const { battery, index } = this.findBiggestBatteryFromLeft(
        lastIndex,
        this._batteryBank.length + 1 -
          (MAX_JOLTAGE_BATTERIES - selectedBatteries.length)
      );
      selectedBatteries.push(battery);
      lastIndex += index + 1;
    }

    return Number(selectedBatteries.join(""));
  }

  private findBiggestBatteryFromLeft(
    startIndex: number,
    endIndex: number
  ): { battery: number; index: number } {
    const slicedBatteryBank = this._batteryBank.slice(startIndex, endIndex);
    const biggestBattery = Math.max(...slicedBatteryBank);
    const biggestBatteryIndex = slicedBatteryBank.indexOf(biggestBattery);

    return { battery: biggestBattery, index: biggestBatteryIndex };
  }
}
