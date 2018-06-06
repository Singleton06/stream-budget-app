import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import {withStyles} from '@material-ui/core/styles';

import React from 'react';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  numericInput: {
    width: theme.spacing.unit * 20
  }
});

const renderDeleteButton = props => {
  return (
    <TableCell padding='none'>
      <IconButton aria-label="Delete" onClick={props.onChangeCallbacks.onDelete} color="secondary">
        <RemoveCircle/>
      </IconButton>
    </TableCell>
  );
};

const BudgetItemTableRow = props => {
  const {classes} = props;
  return (
    <TableRow>
      {/* TODO: add change listener for the name */}
      <TableCell padding="dense">
        <TextField
          id="name"
          onChange={props.onChangeCallbacks.onNameChange}
          margin="normal"
          fullWidth={true}
          value={props.content.name}
          disabled={props.disableAllInputFields || props.disableAmountBudgeted}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="amountBudgeted"
          onChange={props.onChangeCallbacks.onAmountBudgetedChanged}
          margin="normal"
          className={classes.numericInput}
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
          className={classes.numericInput}
          fullWidth={true}
          value={props.content.amountSpent}
          disabled={props.disableAllInputFields || props.disableAmountSpent}
        />
      </TableCell>
      <TableCell numeric padding="dense">
        <TextField
          id="amountRemaining"
          onChange={() => {
          }}
          margin="normal"
          className={classes.numericInput}
          fullWidth={true}
          value={props.content.amountRemaining}
          disabled={props.disableAllInputFields || props.disableAmountRemaining}
        />
      </TableCell>
      {props.showDelete && renderDeleteButton(props)}
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
  showDelete: false,
  onChangeCallbacks: {
    onNameChange: () => {
    },
    onAmountBudgetedChanged: () => {
    },
    onAmountSpentChanged: () => {
    },
    onDelete: () => {
    }
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
  showDelete: PropTypes.bool,
  onChangeCallbacks: PropTypes.shape({
    onNameChange: PropTypes.func,
    onAmountBudgetedChanged: PropTypes.func,
    onAmountSpentChanged: PropTypes.func,
    onDelete: PropTypes.func
  })
};

export default withStyles(styles)(BudgetItemTableRow);
