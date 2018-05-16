

/**
 * Class representing a Budget.
 *
 * @property {string} name
 *    The name of the budget.
 * @property {string} uuid
 *    The unique identifier of the budget.
 * @property {BudgetCategory[]} budgetCategories
 *    The different categories that belong to the budget.
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
   */
  constructor({name, uuid, budgetCategories}) {
    this.name = name;
    this.uuid = uuid;
    this.budgetCategories = budgetCategories;
  }

  copy() {
    return new Budget({
      name: this.name,
      uuid: this.uuid,
      budgetCategories: this.budgetCategories.map(category => category.copy())
    });
  }
}

export default Budget;