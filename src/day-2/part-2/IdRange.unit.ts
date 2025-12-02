import { IdRange } from "./IdRange";

it("parses the starting and ending IDs correctly", () => {
  const range = new IdRange("123-456");

  expect(range.startingId).toBe("123");
  expect(range.endingId).toBe("456");
});

it("1-10 has no invalid IDs.", () => {
  const range = new IdRange("1-10");

  expect(range.invalidIdSum()).toEqual(0);
});

it("11-22 has two invalid IDs, 11 and 22.", () => {
  const range = new IdRange("11-22");

  expect(range.invalidIdSum()).toEqual(33);
});

it("1111111-1111120 has one invalid ID, 1111111.", () => {
  const range = new IdRange("1111111-1111120");

  expect(range.invalidIdSum()).toEqual(1111111);
});

it("95-115 has two invalid IDs, 99 and 111.", () => {
  const range = new IdRange("95-115");

  expect(range.invalidIdSum()).toEqual(210);
});

it("998-1012 has two invalid IDs, 999 and 1010.", () => {
  const range = new IdRange("998-1012");

  expect(range.invalidIdSum()).toEqual(2009);
});

it("1188511880-1188511890 has one invalid ID, 1188511885.", () => {
  const range = new IdRange("1188511880-1188511890");

  expect(range.invalidIdSum()).toEqual(1188511885);
});

it("222220-222224 has one invalid ID, 222222.", () => {
  const range = new IdRange("222220-222224");

  expect(range.invalidIdSum()).toEqual(222222);
});

it("1698522-1698528 contains no invalid IDs.", () => {
  const range = new IdRange("1698522-1698528");

  expect(range.invalidIdSum()).toEqual(0);
});

it("446443-446449 has one invalid ID, 446446.", () => {
  const range = new IdRange("446443-446449");

  expect(range.invalidIdSum()).toEqual(446446);
});

it("38593856-38593862 has one invalid ID, 38593859.", () => {
  const range = new IdRange("38593856-38593862");

  expect(range.invalidIdSum()).toEqual(38593859);
});

it("565653-565659 has one invalid ID, 565656.", () => {
  const range = new IdRange("565653-565659");

  expect(range.invalidIdSum()).toEqual(565656);
});

it("824824821-824824827 has one invalid ID, 824824824.", () => {
  const range = new IdRange("824824821-824824827");

  expect(range.invalidIdSum()).toEqual(824824824);
});

it("2121212118-2121212124 has one invalid ID, 2121212121.", () => {
  const range = new IdRange("2121212118-2121212124");

  expect(range.invalidIdSum()).toEqual(2121212121);
});

it("844644844644-844644844645 has one invalid ID, 844644844644.", () => {
  const range = new IdRange("844644844644-844644844645");

  expect(range.invalidIdSum()).toEqual(844644844644);
});

it("975119-1004307 has five invalid IDs, 975599, 976699, 977799, 978899, and 979999.", () => {
  const range = new IdRange("975119-1004307");

  expect(range.findInvalidIds()).toEqual([
    975975, 976976, 977977, 978978, 979797, 979979, 980980, 981981, 982982,
    983983, 984984, 985985, 986986, 987987, 988988, 989898, 989989, 990990,
    991991, 992992, 993993, 994994, 995995, 996996, 997997, 998998, 999999,
  ]);
});

it('999898-999899 has no invalid IDs.', () => {
  const range = new IdRange("999898-999899");

  expect(range.invalidIdSum()).toEqual(0);
});
