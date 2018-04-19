import React from 'react';

import { TableBody } from 'material-ui/Table';
import { BudgetItemTableRow } from '../BudgetTable';
import { BudgetContext } from '../BudgetProvider';

const SummaryTableBody = () => {
  return (
    <BudgetContext.Consumer>
      {consumer => {
        return (
          <TableBody>
            {consumer
              .getSummary()
              .map(summary => (
                <BudgetItemTableRow
                  key={summary.name}
                  content={summary}
                  disableAllInputFields={true}
                />
              ))}
          </TableBody>
        );
      }}
    </BudgetContext.Consumer>
  );
};

export default SummaryTableBody;
