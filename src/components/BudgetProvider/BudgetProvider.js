import React, { Component } from 'react';
import Budget from '../../models/Budget';
import BudgetLineItem from '../../models/BudgetLineItem';
import Summary from '../../models/Summary';

import budgets from './mock-data.js';

export const BudgetContext = React.createContext();

class BudgetProvider extends Component {
  state = {
    budgets
  };

  handleBudgetChange = (category, line) => {};

  calculateSummaries = () => {
    const { budgets } = this.state;
    return budgets.map(singleBudget => {
      const summaryStructure = singleBudget.budgetLineItems.reduce(
        (accumulator, currentValue) => {
          return {
            budgeted: accumulator.budgeted + currentValue.budgeted,
            spent: accumulator.budgeted + currentValue.budgeted
          };
        },
        { budgeted: 0, spent: 0 }
      );

      return new Summary({ ...summaryStructure, name: singleBudget.name });
    });
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          budgets: budgets,
          getSummary: this.calculateSummaries()
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
