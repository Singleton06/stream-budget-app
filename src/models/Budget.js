/**
 * Represents a collection of budget line items.
 *
 * @property {string} name
 *    The name of the budget.
 * @property {BudgetLineItem[]} budgetLineItems
 *    The items within the budget.
 * @property {string} uuid
 *    Unique identifier for the budget
 */
class Budget {
  constructor({ name, budgetLineItems, uuid }) {
    this.name = name;
    this.budgetLineItems = budgetLineItems;
    this.uuid = uuid;
  }

  copy() {
    return new Budget({
      name: this.name,
      budgetLineItems: this.budgetLineItems.map(item => item.copy()),
      uuid: this.uuid
    });
  }
}

export default Budget;
