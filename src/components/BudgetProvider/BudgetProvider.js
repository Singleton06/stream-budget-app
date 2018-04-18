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
  }

  updateBudget(budgetName, lineItemName, propertyToUpdate, propertyNewValue) {
    console.log(
      'updateBudgetCalled with: ',
      'budgetName: ',
      budgetName,
      'lineItemName: ',
      lineItemName,
      'propertyToUpdate: ',
      propertyToUpdate,
      'propertyNewValue: ',
      propertyNewValue
    );

    const { budgets } = this.state;
    const copiedBudgets = budgets.map(budget => budget.copy());
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
          budgets: budgets,
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
