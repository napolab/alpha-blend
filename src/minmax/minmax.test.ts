import { minmax } from ".";

const testCases = [
  { min: 0, value: -1, max: 10, expected: 0 },
  { min: 0, value: 5, max: 10, expected: 5 },
  { min: 0, value: 11, max: 10, expected: 10 },
];

describe.each(testCases)("minmax", ({ min, value, max, expected }) => {
  it(`should return ${expected} for min=${min}, value=${value}, max=${max}`, () => {
    const result = minmax(min, value, max);
    expect(result).toEqual(expected);
  });
});
