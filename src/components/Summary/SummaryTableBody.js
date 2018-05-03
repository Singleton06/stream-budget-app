import React from 'react';

import {TableBody} from 'material-ui/Table';
import {BudgetItemTableRow} from '../BudgetTable';
import {BudgetContext} from '../BudgetProvider';

const renderSummaryRow = (summary) => {
  return <BudgetItemTableRow key={summary.name} content={summary} disableAllInputFields={true}/>;
}

const SummaryTableBody = () => {
  return (
    <TableBody>
      <BudgetContext.Consumer>
        {budgetConsumer => budgetConsumer.getSummaryWithTotal().map(renderSummaryRow)}
      </BudgetContext.Consumer>
    </TableBody>
  );
};

export default SummaryTableBody;
