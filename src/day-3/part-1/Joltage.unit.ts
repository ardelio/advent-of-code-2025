import { Joltage } from './Joltage';

it('987654321111111 should return max joltage 98', () => {
  expect(new Joltage('987654321111111').max).toBe(98);
});

it('811111111111119 should return max joltage 89', () => {
  expect(new Joltage('811111111111119').max).toBe(89);
});

it('234234234234278 should return max joltage 78', () => {
  expect(new Joltage('234234234234278').max).toBe(78);
});

it('818181911112111 should return max joltage 92', () => {
  expect(new Joltage('818181911112111').max).toBe(92);
});