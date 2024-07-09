/**
 * Distribute ang paos with a budget in random amount in cent to the participants
 * @param {Number} budgetInCents Budget for the ang paos in cents. Use cents
 * due to floating point arithmetic issue
 * @param {Number} participants Number of participants
 * @returns {Number[]} An array of ang paos with amount in cents for each participant
 */
function distributeAngPaos(budgetInCents, participants) {
  // Validate inputs
  if (typeof budgetInCents !== 'number') {
    throw new Error('Budget in cents must be a number')
  }
  if (!Number.isInteger(budgetInCents)) {
    throw new Error('Budget in cents must be an integer')
  }
  if (budgetInCents <= 0) {
    throw new Error('Budget in cents must be greater than 0')
  }
  if (typeof participants !== 'number') {
    throw new Error('Participants must be a number')
  }
  if (!Number.isInteger(participants)) {
    throw new Error('Participants must be a whole number')
  }
  if (participants <= 0) {
    throw new Error('Participants must be greater than 0')
  }

  const participantsArray = Array(participants).fill(0)
  let remainingBudget = budgetInCents
  const angPaos = participantsArray.map((_, index) => {
    if (index === participants - 1) return remainingBudget
    const amount = Math.floor(Math.random() * remainingBudget)
    remainingBudget -= amount
    return amount
  })

  return angPaos
}

module.exports = distributeAngPaos
