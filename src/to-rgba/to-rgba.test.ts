import { toRGBA } from '.'

const testCases = [
  { description: 'hex color', input: '#ff5733', expected: [255, 87, 51, 1] },
  { description: 'rgb color', input: 'rgb(255, 87, 51)', expected: [255, 87, 51, 1] },
  { description: 'rgba color', input: 'rgba(255, 87, 51, 0.5)', expected: [255, 87, 51, 0.5] },
  { description: 'transparent', input: 'transparent', expected: [0, 0, 0, 0] },
]

describe.each(testCases)('toRGBA', ({ description, input, expected }) => {
  it(`should parse ${description}`, () => {
    const result = toRGBA(input)
    expect(result.isOk()).toBe(true)
    const [r, g, b, a] = result._unsafeUnwrap()
    expect([r, g, b, a]).toEqual(expected)
  })
})

describe('toRGBA', () => {
  it('should return error for invalid color', () => {
    const result = toRGBA('invalid-color')
    expect(result.isErr()).toBe(true)
    expect(result._unsafeUnwrapErr()).toEqual(['Invalid color string'])
  })
})
