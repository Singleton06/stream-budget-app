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
              key={budget.uuid}
              name={budget.name}
              budgetLineItems={budget.budgetLineItems}
              onBudgetUpdate={consumer.updateBudget}
            />
          );
        });
      }}
    </BudgetContext.Consumer>
  );
};

export default BudgetContainer;
