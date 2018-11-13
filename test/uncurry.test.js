const {and, lte, gte, partialRight, uncurry} = require('..')

describe('uncurry', () => {
  test('uncurries curried functions', () => {
    const inclusive = pair =>
      and(partialRight(gte, [pair[0]]), partialRight(lte, [pair[1]]))

    const inclusive50to100 = inclusive([50, 100])

    expect(uncurry(inclusive)([50, 100], 75)).toBe(true)
    expect(uncurry(inclusive)([50, 100], 75)).toBe(inclusive50to100(75))
  })

  test('uncurries curried functions', () => {
    const inclusive = uncurry(pair =>
      and(partialRight(gte, [pair[0]]), partialRight(lte, [pair[1]]))
    )

    expect(inclusive([50, 100], 75)).toBe(true)
  })
})
