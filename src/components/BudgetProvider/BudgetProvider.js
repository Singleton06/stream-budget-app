import React, { Component } from "react";

export const BudgetContext = React.createContext();

class BudgetProvider extends Component {
  state = {
    budgets: [
      {
        name: "Food",
        lineItems: [
          {
            name: "Grocery",
            amountBudgeted: 100,
            amountSpent: 50
          },
          {
            name: "Eating Out",
            amountBudgeted: 200,
            amountSpent: 100
          }
        ]
      },
      {
        name: "Transportation",
        lineItems: [
          {
            name: "Fuel",
            amountBudgeted: 300,
            amountSpent: 150
          },
          {
            name: "Repairs",
            amountBudgeted: 400,
            amountSpent: 200
          }
        ]
      }
    ],

    budget2: {
      Food: {
        Groceries: { budgeted: 100, spent: 30 },
        "Dine Out": { budgeted: 100, spent: 50 }
      },
      Transportation: {
        Fuel: { budgeted: 300, spent: 150 },
        Repairs: { budgeted: 400, spent: 500 }
      }
    }
  };

  handleBudgetChange = (category, line) => {};

  calculateSummaries = () => {
    return this.state.budgets.map(budget => {
      const totalBudgeted = budget.lineItems.reduce((a, line) => {
        return (a += line.amountBudgeted);
      }, 0);
      const totalSpent = budget.lineItems.reduce((a, line) => {
        return (a += line.amountSpent);
      }, 0);
      return { name: budget.name, totalBudgeted, totalSpent };
    });
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          budgets: this.state.budgets,
          summaries: this.calculateSummaries()
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
