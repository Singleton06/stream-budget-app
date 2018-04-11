import React, { Component } from "react";

export const BudgetContext = React.createContext();

class BudgetProvider extends Component {
  state = {
    budgets: {
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
          budgets: this.transformToArray(),
          summaries: this.calculateSummaries()
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
