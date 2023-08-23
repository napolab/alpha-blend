import color2rgba from 'color-rgba'
import { err, ok, type Result } from 'neverthrow'

export const toRGBA = (color: string): Result<[r: number, g: number, b: number, a: number], string[]> => {
  const result = color2rgba(color)
  if (result === undefined) return err(['Invalid color string'])
  // 空になる場合がある
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (result.length !== 4) return err(['Invalid color string'])

  return ok(result)
}
