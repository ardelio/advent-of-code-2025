import { IdRange } from './IdRange';

it('parses the starting and ending IDs correctly', () => {
  const range = new IdRange("123-456");

  expect(range.startingId).toBe("123");
  expect(range.endingId).toBe("456");
});

it('1-9 contains no invalid IDs.', () => {
  const range = new IdRange("1-9");

  expect(range.invalidIdSum()).toEqual(0);
});

it('11-22 has two invalid IDs, 11 and 22.', () => {
  const range = new IdRange("11-22");

  expect(range.invalidIdSum()).toEqual(33);
});

it('95-115 has one invalid ID, 99.', () => {
  const range = new IdRange("95-115");

  expect(range.invalidIdSum()).toEqual(99);
});

it('998-1012 has one invalid ID, 1010.', () => {
  const range = new IdRange("998-1012");

  expect(range.invalidIdSum()).toEqual(1010);
});

it('1188511880-1188511890 has one invalid ID, 1188511885.', () => {
  const range = new IdRange("1188511880-1188511890");

  expect(range.invalidIdSum()).toEqual(1188511885);
});

it('222220-222224 has one invalid ID, 222222.', () => {
  const range = new IdRange("222220-222224");

  expect(range.invalidIdSum()).toEqual(222222);
});

it('1698522-1698528 contains no invalid IDs.', () => {
  const range = new IdRange("1698522-1698528");

  expect(range.invalidIdSum()).toEqual(0);
});

it('446443-446449 has one invalid ID, 446446.', () => {
  const range = new IdRange("446443-446449");

  expect(range.invalidIdSum()).toEqual(446446);
});

it('38593856-38593862 has one invalid ID, 38593859.', () => {
  const range = new IdRange("38593856-38593862");

  expect(range.invalidIdSum()).toEqual(38593859);
});