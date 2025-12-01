
import { Rotations } from './Rotations';

it('loads rotations from a file', async () => {
  const data = 'R21\nL2';
  const rotations = await Rotations.load(data);
  expect(rotations).toHaveLength(2);
  expect(rotations.get(0).direction).toBe('R');
  expect(rotations.get(0).amount).toBe(21);
  expect(rotations.get(1).direction).toBe('L');
  expect(rotations.get(1).amount).toBe(2);
});

it('calculates the password as 1', async () => {
  const data = 'L1';
  const rotations = await Rotations.load(data);
  const startingNumber = 1;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(1);
});

it('calculates the password as 2', async () => {
  const data = 'L1\nR2\nL2';
  const rotations = await Rotations.load(data);
  const startingNumber = 1;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(2);
});

it('calcuates the password as 4', async () => {
  const data = 'R1\nL11\nR3\nL4\nR1\nL7\nL2\nR9\nR11\nL11\nR5';
  const rotations = await Rotations.load(data);
  const startingNumber = 10;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(4);
});

it('the range is 0 to 99 and then it loops back around when going past zero in the positive direction', async () => {
  const data = 'R50\nL1';
  const rotations = await Rotations.load(data);
  const startingNumber = 50;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(1);
});

it('the range is 0 to 99 and then it loops back around when going past zero in the negative direction', async () => {
  const data = 'L151\nR1';
  const rotations = await Rotations.load(data);
  const startingNumber = 50;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(1);
});

it('calculates the password as 1 when starting at 0 and adding 100', async () => {
  const data = 'R100';
  const rotations = await Rotations.load(data);
  const startingNumber = 0;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(1);
});

it('calculates the password as 1 when starting at 0 and subtracting 100', async () => {
  const data = 'L100';
  const rotations = await Rotations.load(data);
  const startingNumber = 0;
  const password = rotations.calculatePassword(startingNumber);
  expect(password).toBe(1);
});