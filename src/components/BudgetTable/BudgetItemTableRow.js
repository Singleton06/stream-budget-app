import React from 'react';
import TextField from 'material-ui/TextField';
import { TableRow, TableCell } from 'material-ui/Table';
import PropTypes from 'prop-types';

const BudgetItemTableRow = props => {
  console.log(props);
  return (
    <TableRow>
      {/* TODO: add change listener for the name */}
      <TableCell padding="dense">{props.content.name}</TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="amountBudgeted"
          onChange={props.onChangeCallbacks.onAmountBudgetedChanged}
          margin="normal"
          fullWidth={true}
          value={props.content.amountBudgeted}
          disabled={props.disableAllInputFields || props.disableAmountBudgeted}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="amountSpent"
          onChange={props.onChangeCallbacks.onAmountSpentChanged}
          margin="normal"
          fullWidth={true}
          value={props.content.amountSpent}
          disabled={props.disableAllInputFields || props.disableAmountSpent}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="amountRemaining"
          onChange={() => {}}
          margin="normal"
          fullWidth={true}
          value={props.content.amountRemaining}
          disabled={props.disableAllInputFields || props.disableAmountRemaining}
        />
      </TableCell>
    </TableRow>
  );
};

BudgetItemTableRow.defaultProps = {
  content: {
    name: '',
    amountBudgeted: 0,
    amountSpent: 0,
    amountRemaining: 0
  },
  disableAllInputFields: false,
  disableAmountBudgeted: false,
  disableAmountSpent: false,
  disableAmountRemaining: false,
  onChangeCallbacks: {
    onNameChange: () => {},
    onAmountBudgetedChanged: () => {},
    onAmountSpentChanged: () => {}
  }
};

BudgetItemTableRow.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountBudgeted: PropTypes.number,
    amountSpent: PropTypes.number,
    amountRemaining: PropTypes.number
  }),
  disableAllInputFields: PropTypes.bool,
  disableAmountBudgeted: PropTypes.bool,
  disableAmountSpent: PropTypes.bool,
  disableAmountRemaining: PropTypes.bool,
  onChangeCallbacks: PropTypes.shape({
    onNameChange: PropTypes.func,
    onAmountBudgetedChanged: PropTypes.func,
    onAmountSpentChanged: PropTypes.func
  })
};

export default BudgetItemTableRow;
