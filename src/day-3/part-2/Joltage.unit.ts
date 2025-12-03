import { Joltage } from './Joltage';

it('987654321111111 should return max joltage 987654321111', () => {
  expect(new Joltage('987654321111111').max).toBe(987654321111);
});

it('811111111111119 should return max joltage 811111111119', () => {
  expect(new Joltage('811111111111119').max).toBe(811111111119);
});

it('234234234234278 should return max joltage 434234234278', () => {
  expect(new Joltage('234234234234278').max).toBe(434234234278);
});

it('818181911112111 should return max joltage 888911112111', () => {
  expect(new Joltage('818181911112111').max).toBe(888911112111);
});