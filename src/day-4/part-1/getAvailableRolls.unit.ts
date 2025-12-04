import { getAvailableRolls } from './getAvailableRolls';

it("there are 13 rolls that can can be accessed", () => {
  const rollRack = '..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.';

  expect(getAvailableRolls(rollRack)).toEqual(13);
});
