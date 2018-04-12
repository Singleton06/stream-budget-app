import React, { Component } from 'react';
import Budget from '../../models/Budget';
import BudgetLineItem from '../../models/BudgetLineItem';

export const BudgetContext = React.createContext();
const budgets = [
  new Budget({
    name: 'Food',
    budgetLineItems: [
      new BudgetLineItem({
        name: 'Grocery',
        amountBudgeted: 150,
        amountSpent: 100
      }),
      new BudgetLineItem({
        name: 'Eating Out',
        amountBudgeted: 250,
        amountSpent: 175
      })
    ]
  }),
  new Budget({
    name: 'Transportation',
    budgetLineItems: [
      new BudgetLineItem({
        name: 'Fuel',
        amountBudgeted: 600,
        amountSpent: 550
      }),
      new BudgetLineItem({
        name: 'Repair',
        amountBudgeted: 50,
        amountSpent: 100
      })
    ]
  })
];

class BudgetProvider extends Component {
  state = {
    budgets: budgets
  };

  handleBudgetChange = (category, line) => {};

  transformToArray = () => {
    const { budgets } = this.state;
    return Object.keys(budgets).map(key => {
      return {
        name: key,
        lineItems: Object.keys(budgets[key]).map(lineKey => ({
          name: lineKey,
          budgeted: budgets[key][lineKey].budgeted,
          spent: budgets[key][lineKey].spent
        }))
      };
    });
  };

  calculateSummaries = () => {
    const { budgets } = this.state;
    return Object.keys(budgets).map(key => {
      const totalBudgeted = Object.keys(budgets[key]).reduce((a, lineKey) => {
        return (a += budgets[key][lineKey].budgeted);
      }, 0);
      const totalSpent = Object.keys(budgets[key]).reduce((a, lineKey) => {
        return (a += budgets[key][lineKey].spent);
      }, 0);
      return { name: key, totalBudgeted, totalSpent };
    });
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          budgets: budgets,
          summaries: this.calculateSummaries()
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
