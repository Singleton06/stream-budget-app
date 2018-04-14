/**
 * Represents a summary of all of the line items within a budget category.
 *
 * @property {string} name
 *    The name of the budget that this summary is for.
 * @property {number} amountBudgeted
 *    The amount of money that was budgeted for within the budget category.
 * @property {number} amountSpent
 *    The amount of money that has been spent for budget category.
 * @property {number} amountRemaining
 *    The amount of money remaining in the budget category.
 */
class Summary {
  constructor({ name, amountBudgeted, amountSpent }) {
    this.name = name;
    this.amountBudgeted = amountBudgeted;
    this.amountSpent = amountSpent;
    this.amountRemaining = this.amountBudgeted - this.amountSpent;
  }
}

export default Summary;
