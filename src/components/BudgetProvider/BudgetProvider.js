import React from 'react';
import BudgetLineItem from '../../models/BudgetLineItem';
import Budget from '../../models/Budget';
import Summary from '../../models/Summary';
import uuid from 'uuid/v4';

import budgets from './mock-data.js';

export const BudgetContext = React.createContext();

class BudgetProvider extends React.Component {
  state = {
    budgets
  };

  addNewBudgetCategory = budgetName => {
    this.setState(previousState => {
      const copiedBudgets = this.copyBudgetsFromState(previousState);
      copiedBudgets.push(
        new Budget({
          name: budgetName,
          uuid: uuid(),
          budgetLineItems: []
        })
      );

      return {
        budgets: copiedBudgets
      };
    });
  };

  copyBudgetsFromState = previousState => {
    const { budgets } = previousState;
    return budgets.map(budget => budget.copy());
  };

  updateBudget = (budgetName, lineItemName, propertyToUpdate, propertyNewValue) => {
    this.setState(previousState => {
      const copiedBudgets = this.copyBudgetsFromState(previousState);
      const matchingBudget = copiedBudgets.find(budget => budget.name === budgetName);
      const budgetLineItem = matchingBudget.budgetLineItems.find(lineItem => lineItem.name === lineItemName);

      const budgetLineItemIndex = matchingBudget.budgetLineItems.indexOf(budgetLineItem);

      matchingBudget.budgetLineItems[budgetLineItemIndex] = new BudgetLineItem({
        ...budgetLineItem,
        [propertyToUpdate]: propertyNewValue
      });

      budgetLineItem[propertyToUpdate] = propertyNewValue;
      return {
        budgets: copiedBudgets
      };
    });
  };

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
