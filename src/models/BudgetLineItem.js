/**
 * Represents a single line item within a budget.
 *
 * @property {string} uuid
 *    The uuid of the budget line item.
 * @property {string} name
 *    The name of the budget line item.
 * @property {number} amountBudgeted
 *    The amount of money that was budgeted for the line item.
 * @property {number} amountSpent
 *    The amount of money that has been spent for the line item.
 * @property {number} amountRemaining
 *    The amount of money remaining in the line item budget.
 *
 */
class BudgetLineItem {
  constructor({ uuid, name, amountBudgeted, amountSpent }) {
    this.uuid = uuid;
    this.name = name;
    this.amountBudgeted = amountBudgeted;
    this.amountSpent = amountSpent;
    this.amountRemaining = this.amountBudgeted - this.amountSpent;
  }

  copy() {
    return new BudgetLineItem({
      uuid: this.uuid,
      name: this.name,
      amountBudgeted: this.amountBudgeted,
      amountSpent: this.amountSpent,
      amountRemaining: this.amountRemaining
    });
  }
}

export default BudgetLineItem;
