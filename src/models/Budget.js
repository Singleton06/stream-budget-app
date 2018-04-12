/**
 * Represents a collection of budget line items.
 *
 * @property {string} name
 *    The name of the budget.
 * @property {BudgetLineItem[]} budgetLineItems
 *    The items within the budget.
 */
class Budget {
  constructor({ name, budgetLineItems }) {
    this.name = name;
    this.budgetLineItems = budgetLineItems;
  }
}

export default Budget;
