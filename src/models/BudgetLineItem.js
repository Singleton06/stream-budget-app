/**
 * Represents a single line item within a budget.
 *
 * @property {string} name
 *    The name of the budget line item.
 * @property {number} amountBudgeted
 *    The amount of money that was budgeted for the line item.
 * @property {number} amountSpent
 *    The amount of money that has been spent for the line item.
 * @property {number} amountRemaining
 *    The amount of money remaining in the line item budget.
 */
class BudgetLineItem {
  constructor({ name, amountBudgeted, amountSpent }) {
    this.name = name;
    this.amountBudgeted = amountBudgeted;
    this.amountSpent = amountSpent;
    this.amountRemaining = this.amountBudgeted - this.amountSpent;
  }
}
export default BudgetLineItem;
