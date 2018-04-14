import React from 'react';
import TextField from 'material-ui/TextField';
import { TableRow, TableCell } from 'material-ui/Table';
import PropTypes from 'prop-types';

const BudgetItemTableRow = props => {
  return (
    <TableRow>
      <TableCell padding="dense">{props.content.name}</TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.content.amountBudgeted}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.content.amountSpent}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="name"
          onChange=""
          margin="normal"
          fullWidth="true"
          value={props.content.amountRemaining}
        />
      </TableCell>
    </TableRow>
  );
};

BudgetItemTableRow.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountBudgeted: PropTypes.number,
    amountSpent: PropTypes.number,
    amountRemaining: PropTypes.number
  })
};

export default BudgetItemTableRow;
