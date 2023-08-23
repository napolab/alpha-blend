import { alphaBlend } from '.'

describe('alphaBlend', () => {
  const testCases = [
    { color1: 'transparent', color2: 'transparent', expected: '#00000000' },
    { color1: "rgba(255, 0, 0, 1)", color2: "transparent", expected: "#ff0000ff" },
    { color1: "rgba(255, 0, 0, 1)", color2: "rgba(0, 0, 0, 0)", expected: "#ff0000ff" },
    { color1: "rgba(0, 255, 0, 1)", color2: "transparent", expected: "#00ff00ff" },
    { color1: "rgba(0, 255, 0, 1)", color2: "rgba(0, 0, 0, 0)", expected: "#00ff00ff" },
    { color1: "rgba(0, 0, 255, 1)", color2: "transparent", expected: "#0000ffff" },
    { color1: "rgba(0, 0, 255, 1)", color2: "rgba(0, 0, 0, 0)", expected: "#0000ffff" },

    { color1: "rgba(255, 0, 0, 1)", color2: "rgba(0, 0, 0, 0.1)", expected: "#e50000ff" },
    { color1: "rgba(0, 255, 0, 1)", color2: "rgba(0, 0, 0, 0.1)", expected: "#00e500ff" },
    { color1: "rgba(0, 0, 255, 1)", color2: "rgba(0, 0, 0, 0.1)", expected: "#0000e5ff" },
  ]

  describe.each(testCases)('alphaBlend', ({ color1, color2, expected }) => {
    it(`should blend ${color1} and ${color2} to ${expected}`, () => {
      const result = alphaBlend(color1, color2)
      expect(result.isOk()).toBe(true)
      expect(result._unsafeUnwrap()).toEqual(expected)
    })
  })
})
