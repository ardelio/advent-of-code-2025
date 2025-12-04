import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { finished } from 'node:stream/promises';

import { getAvailableRolls } from './getAvailableRolls';

it("there are 13 rolls that can can be accessed", async () => {
  const rollRack = '..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.';
  const filepath = path.join(__dirname, '.tmp', `test-${Date.now()}.txt`);
  const stream = createWriteStream(filepath, { flags: 'w' });

  const availableRolls = await getAvailableRolls(rollRack, stream);

  stream.end();
  await finished(stream);

  expect(availableRolls).toEqual(13);
});
