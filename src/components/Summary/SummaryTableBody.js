import React from 'react';

import TableBody from '@material-ui/core/TableBody';
import {BudgetItemTableRow} from '../BudgetTable';
import {BudgetConsumer} from '../BudgetProvider';

const renderSummaryRow = (summary) => {
  return <BudgetItemTableRow key={summary.name} content={summary} disableAllInputFields={true}/>;
};

const SummaryTableBody = () => {
  return (
    <TableBody>
      <BudgetConsumer>
        {budgetConsumer => budgetConsumer.getSummaryWithTotal().map(renderSummaryRow)}
      </BudgetConsumer>
    </TableBody>
  );
};

export default SummaryTableBody;
