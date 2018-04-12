import React from 'react';
import TextField from 'material-ui/TextField';
import { TableRow, TableCell } from 'material-ui/Table';
import PropTypes from 'prop-types';

const BudgetListItemRow = props => {
  return (
    <TableRow>
      <TableCell padding="dense">{props.name}</TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          value="value"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.amountBudgeted}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          value="value"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.amountSpent}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          value="value"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.amountRemaining}
        />
      </TableCell>
    </TableRow>
  );
};

BudgetListItemRow.propTypes = {
  name: PropTypes.string,
  amountBudgeted: PropTypes.number,
  amountSpent: PropTypes.number,
  amountRemaining: PropTypes.number
};

export default BudgetListItemRow;
