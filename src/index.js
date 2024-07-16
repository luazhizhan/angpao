function validateBudget(budgetInCents) {
  if (typeof budgetInCents !== 'number') {
    throw new Error('Budget in cents must be a number')
  }
  if (!Number.isInteger(budgetInCents)) {
    throw new Error('Budget in cents must be an integer')
  }
  if (budgetInCents <= 0) {
    throw new Error('Budget in cents must be greater than 0')
  }
}

function validateParticipants(participants) {
  if (typeof participants !== 'number') {
    throw new Error('Participants must be a number')
  }
  if (!Number.isInteger(participants)) {
    throw new Error('Participants must be a whole number')
  }
  if (participants <= 0) {
    throw new Error('Participants must be greater than 0')
  }
}

function distributeRandomValueInArray(value, size) {
  const array = Array(size).fill(0)

  let remainingValue = value
  return array.map((_, index) => {
    if (remainingValue === 0) return 0

    const amount = Math.floor(Math.random() * remainingValue)

    if (amount >= remainingValue) {
      const temp = remainingValue
      remainingValue = 0
      return temp
    }

    if (index === size - 1) return remainingValue

    remainingValue -= amount
    return amount
  })
}

/**
 * Distribute ang paos with a budget in random amount in cent to the participants
 * @param {Number} budgetInCents Budget for the ang paos in cents. Use cents
 * due to floating point arithmetic issue
 * @param {Number} participants Number of participants
 * @returns {Number[]} An array of ang paos with amount in cents for each participant
 */
function distributeAngPaos(budgetInCents, participants) {
  // Validate inputs
  validateBudget(budgetInCents)
  validateParticipants(participants)
  return distributeRandomValueInArray(budgetInCents, participants)
}

module.exports = distributeAngPaos
