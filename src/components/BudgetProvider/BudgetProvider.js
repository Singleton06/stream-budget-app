import React from 'react';
import Budget from '../../models/Budget';
import BudgetLineItem from '../../models/BudgetLineItem';
import Summary from '../../models/Summary';

import budgets from './mock-data.js';

export const BudgetContext = React.createContext();

class BudgetProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      budgets
    };

    this.updateBudget = this.updateBudget.bind(this);
    this.calculateSummaries = this.calculateSummaries.bind(this);
    this.copyBudgetsFromState = this.copyBudgetsFromState.bind(this);
    this.getMatchingLineItemFromBudgets = this.getMatchingLineItemFromBudgets.bind(
      this
    );
    this.editLineItemName = this.editLineItemName.bind(this);
  }

  copyBudgetsFromState() {
    const { budgets } = this.state;
    return budgets.map(budget => budget.copy());
  }

  getMatchingLineItemFromBudgets(budgets, budgetName, lineItemName) {
    const matchingBudget = budgets.find(budget => budget.name === budgetName);
    return matchingBudget.budgetLineItems.find(
      lineItem => lineItem.name === lineItemName
    );
  }

  editLineItemName(budgetName, oldLineItemName, newLineItemName) {
    const copiedBudgets = this.copyBudgetsFromState();
    const matchedBudgetLineItem = this.getMatchingLineItemFromBudgets(
      copiedBudgets,
      budgetName,
      oldLineItemName
    );
  }

  updateBudget(budgetName, lineItemName, propertyToUpdate, propertyNewValue) {
    const copiedBudgets = this.copyBudgetsFromState();
    const matchingBudget = copiedBudgets.find(
      budget => budget.name === budgetName
    );
    const budgetLineItem = matchingBudget.budgetLineItems.find(
      lineItem => lineItem.name === lineItemName
    );

    const budgetLineItemIndex = matchingBudget.budgetLineItems.indexOf(
      budgetLineItem
    );

    matchingBudget.budgetLineItems[budgetLineItemIndex] = new BudgetLineItem({
      ...budgetLineItem,
      [propertyToUpdate]: propertyNewValue
    });

    budgetLineItem[propertyToUpdate] = propertyNewValue;
    console.log(copiedBudgets);

    this.setState({
      budgets: copiedBudgets
    });
  }

  calculateSummaries = () => {
    const { budgets } = this.state;
    return budgets.map(singleBudget => {
      const summaryStructure = singleBudget.budgetLineItems.reduce(
        (accumulator, currentValue) => {
          return {
            budgeted: accumulator.budgeted + currentValue.amountBudgeted,
            spent: accumulator.spent + currentValue.amountSpent
          };
        },
        { budgeted: 0, spent: 0 }
      );

      return new Summary({
        name: singleBudget.name,
        amountBudgeted: summaryStructure.budgeted,
        amountSpent: summaryStructure.spent
      });
    });
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          budgets: this.state.budgets,
          getSummary: this.calculateSummaries,
          updateBudget: this.updateBudget
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
