import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Switch from '@material-ui/core/Switch';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteButton from '@material-ui/icons/Delete';

const renderBudgetRow = (budget, onBudgetDelete, onBudgetToggle) => {
  return (
    <TableRow key={budget.uuid}>
      <TableCell>{budget.name}</TableCell>
      <TableCell>
        <Switch checked={budget.isVisible} onChange={(event, checked) => onBudgetToggle(budget.uuid, checked)} />
      </TableCell>
      <TableCell>
        <IconButton>
          <DeleteButton onClick={() => onBudgetDelete(budget.uuid)} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const renderBudgetsTable = (budgets, onDeleteBudget, onBudgetToggle) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Budget Name</TableCell>
          <TableCell numeric>Visible</TableCell>
          <TableCell numeric>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{budgets.map(budget => renderBudgetRow(budget, onDeleteBudget, onBudgetToggle))}</TableBody>
    </Table>
  );
};

const BudgetListDialog = props => (
  <Dialog open>
    <DialogTitle>Budget List Settings</DialogTitle>
    <DialogContent>{renderBudgetsTable(props.budgets, props.onDeleteBudget, props.onBudgetToggle)}</DialogContent>
    <DialogActions>
      <Button onClick={() => props.onClose()} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

BudgetListDialog.propTypes = {
  onClose: PropTypes.func,
  budgets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      uuid: PropTypes.string
    })
  ),
  onDeleteBudget: PropTypes.func,
  onBudgetToggle: PropTypes.func
};

export default BudgetListDialog;
