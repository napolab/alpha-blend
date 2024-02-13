import { toRGBA } from ".";

const testCases = [
  { description: "hex color", input: "#ff5733", expected: [255, 87, 51, 1] },
  { description: "rgb color", input: "rgb(255, 87, 51)", expected: [255, 87, 51, 1] },
  { description: "rgba color", input: "rgba(255, 87, 51, 0.5)", expected: [255, 87, 51, 0.5] },
  { description: "transparent", input: "transparent", expected: [0, 0, 0, 0] },
];

describe.each(testCases)("toRGBA", ({ description, input, expected }) => {
  it(`should parse ${description}`, () => {
    const result = toRGBA(input);
    const [r, g, b, a] = result;
    expect([r, g, b, a]).toEqual(expected);
  });
});

describe("toRGBA", () => {
  it("should return error for invalid color", () => {
    const error = new Error("Invalid color string");
    expect(() => toRGBA("invalid-color")).toThrowError(error);
  });
});
