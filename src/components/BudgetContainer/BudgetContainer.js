import BudgetCategory from '../BudgetCategory';
import React from 'react';
import { BudgetContext } from '../BudgetProvider';

const BudgetContainer = () => {
  return (
    <BudgetContext.Consumer>
      {consumer => {
        return consumer.budgets.map(budget => {
          return (
            <BudgetCategory
              key={budget.name}
              name={budget.name}
              budgetLineItems={budget.budgetLineItems}
            />
          );
        });
      }}
    </BudgetContext.Consumer>
  );
};

export default BudgetContainer;
