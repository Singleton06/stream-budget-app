/**
 * Represents a category of like items that have been budgeted, generally containing 1 or more {@link BudgetLineItem}s.
 *
 * @property {string} name
 *    The name of the budget.
 * @property {BudgetLineItem[]} budgetLineItems
 *    The items within the budget.
 * @property {string} uuid
 *    Unique identifier for the budget
 */
class BudgetCategory {
  constructor({ name, budgetLineItems, uuid }) {
    this.name = name;
    this.budgetLineItems = budgetLineItems;
    this.uuid = uuid;
  }

  copy() {
    return new BudgetCategory({
      name: this.name,
      budgetLineItems: this.budgetLineItems.map(item => item.copy()),
      uuid: this.uuid
    });
  }
}

export default BudgetCategory;
