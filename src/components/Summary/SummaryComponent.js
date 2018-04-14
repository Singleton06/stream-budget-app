import React from 'react';
import { BudgetContext } from '../BudgetProvider';

const Summary = () => {
  return (
    <div>
      <h1>Summary</h1>
      <BudgetContext.Consumer>
        {consumer => {
          return consumer.getSummary.map(summary => (
            <div>
              {summary.name}:{summary.totalBudgeted}:{summary.totalSpent}
            </div>
          ));
        }}
      </BudgetContext.Consumer>
    </div>
  );
};

export default Summary;
