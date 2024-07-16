const distributeAngPaos = require('./index')

describe('distributeAngPaos', () => {
  it('should throw an error if budget in cents is not a number', () => {
    expect(() => distributeAngPaos('100', 5)).toThrow(
      'Budget in cents must be a number'
    )
  })

  it('should throw an error if budget in cents is not an integer', () => {
    expect(() => distributeAngPaos(100.5, 5)).toThrow(
      'Budget in cents must be an integer'
    )
  })

  it('should throw an error if budget in cents is less than or equal to 0', () => {
    expect(() => distributeAngPaos(0, 5)).toThrow(
      'Budget in cents must be greater than 0'
    )
  })

  it('should throw an error if participants is not a number', () => {
    expect(() => distributeAngPaos(100, '5')).toThrow(
      'Participants must be a number'
    )
  })

  it('should throw an error if participants is not a whole number', () => {
    expect(() => distributeAngPaos(100, 5.5)).toThrow(
      'Participants must be a whole number'
    )
  })

  it('should throw an error if participants is less than or equal to 0', () => {
    expect(() => distributeAngPaos(100, 0)).toThrow(
      'Participants must be greater than 0'
    )
  })

  it('should distribute ang paos with random amount with a budget in cents to the participants', () => {
    // $100 dollars in cents to 5 participants
    const distribution1 = distributeAngPaos(10000, 5)
    expect(distribution1).toHaveLength(5)
    expect(distribution1.reduce((a, b) => a + b)).toBe(10000)

    // $100.50 dollars in cents to 20 participants
    const distribution2 = distributeAngPaos(10050, 20)
    expect(distribution2).toHaveLength(20)
    expect(distribution2.reduce((a, b) => a + b)).toBe(10050)

    const distribution4 = distributeAngPaos(10050, 120)
    expect(distribution4).toHaveLength(120)
    expect(distribution4.reduce((a, b) => a + b)).toBe(10050)

    // $7.54 dollars in cents to 1 million participants
    const distribution3 = distributeAngPaos(754, 1_000_000)
    expect(distribution3).toHaveLength(1000000)
    expect(distribution3.reduce((a, b) => a + b)).toBe(754)
  })
})
