import color2rgba from "color-rgba";

export const toRGBA = (color: string): [r: number, g: number, b: number, a: number] => {
  const result = color2rgba(color);
  if (result === undefined) {
    throw new Error("Invalid color string");
  }
  // 空になる場合がある
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (result.length !== 4) {
    throw new Error("Invalid color string");
  }

  return result;
};
