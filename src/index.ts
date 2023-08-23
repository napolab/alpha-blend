import { Result } from 'neverthrow'
import rgbHex from 'rgb-hex'

import { minmax } from './minmax'
import { toRGBA } from './to-rgba'

// 画像のアルファブレンドの計算式をもとに計算
// MEMO: https://qiita.com/kerupani129/items/4bf75d9f44a5b926df58#11-%E9%80%9A%E5%B8%B8%E5%90%88%E6%88%90%E3%81%AE%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89
export const alphaBlend = <I1 extends string, I2 extends string>(background: I1, foreground: I2) => {
  const backgroundResult = toRGBA(background).mapErr((e) => [background, e] as const)
  const foregroundResult = toRGBA(foreground).mapErr((e) => [foreground, e] as const)

  return Result.combine([backgroundResult, foregroundResult]).map(([_background, _foreground]) => {
    const [rb, gb, bb, ab] = _background
    const [rf, gf, bf, af] = _foreground

    const a = ab * (1 - af) + af
    if (a === 0) return `#${rgbHex(0, 0, 0, 0).toLowerCase()}`

    const r = minmax(0, (ab * (1 - af) * rb + rf * af) / a, 255)
    const g = minmax(0, (ab * (1 - af) * gb + gf * af) / a, 255)
    const b = minmax(0, (ab * (1 - af) * bb + bf * af) / a, 255)

    return `#${rgbHex(r, g, b, a).toLowerCase()}`
  })
}
