import React, { Component } from "react";

export const BudgetContext = React.createContext();

class BudgetProvider extends Component {
  state = {
    budgets: [{ name: "Test" }, { name: "Food" }]
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          budgets: this.state.budgets,
          doAction: () => {
            console.log("do something here");
          }
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

export default BudgetProvider;
