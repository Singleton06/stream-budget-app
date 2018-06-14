/**
 * Class representing a Budget.
 *
 * @property {string} name
 *    The name of the budget.
 * @property {string} uuid
 *    The unique identifier of the budget.
 * @property {BudgetCategory[]} budgetCategories
 *    The different categories that belong to the budget.
 * @property {boolean} isVisible
 *    Whether or not the budget is visible in the general view.
 */
class Budget {
  /**
   * Default constructor.
   *
   * @param {string} name
   *    The name of the budget.
   * @param {string} uuid
   *    The unique identifier of the budget.
   * @param {BudgetCategory[]} budgetCategories
   *    The different categories that belong to the budget.
   * @param {boolean} [true] isVisible
   *    Whether or not the budget is visible in the general view.
   */
  constructor({ name, uuid, budgetCategories, isVisible = true }) {
    this.name = name;
    this.uuid = uuid;
    this.budgetCategories = budgetCategories;
    this.isVisible = isVisible;
  }

  copy() {
    return new Budget({
      name: this.name,
      uuid: this.uuid,
      budgetCategories: this.budgetCategories.map(category => category.copy()),
      isVisible: this.isVisible
    });
  }
}

export default Budget;
