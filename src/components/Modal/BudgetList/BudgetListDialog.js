import React, { Component } from 'react';
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


class BudgetListDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmDeleteUUID: undefined
    }
  }

  handleDeleteClicked = (budget) => {
    if (this.state.confirmDeleteUUID === budget.uuid) {
      this.props.onDeleteBudget(budget.uuid);
    } else {
      this.setState({
        confirmDeleteUUID: budget.uuid
      });
    }
  };

  handleOnMouseLeave = (budget) => {
    if (this.state.confirmDeleteUUID === budget.uuid) {
      this.setState({
        confirmDeleteUUID: undefined
      })
    }
  };

  renderBudgetRow = (budget) => {
    return (
      <TableRow key={budget.uuid}>
        <TableCell>{budget.name}</TableCell>
        <TableCell>
          <Switch checked={budget.isVisible} onChange={(event, checked) => this.props.onBudgetToggle(budget.uuid, checked)} />
        </TableCell>
        <TableCell>
          <Button onClick={() => this.handleDeleteClicked(budget)} onMouseLeave={() => this.handleOnMouseLeave(budget)} color="secondary">
            { this.state.confirmDeleteUUID === budget.uuid ? "Click again to confirm" : "Delete" }
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  renderBudgetsTable = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Budget Name</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.props.budgets.map(budget => this.renderBudgetRow(budget))}</TableBody>
      </Table>
    );
  };

  render() {
    return (
      <Dialog open maxWidth="md" fullWidth>
        <DialogTitle>Budget List Settings</DialogTitle>
        <DialogContent>{this.renderBudgetsTable()}</DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onClose()} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

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
