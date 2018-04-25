import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import React from 'react';
import PropTypes from 'prop-types';

class AddBudgetDialog extends React.Component {
  state = {
    budgetCategoryName: ''
  };

  handleBudgetCategoryNameFieldChange = event => {
    this.setState({
      budgetCategoryName: event.target.value
    });
  };

  handleAddButtonClicked = () => {
    this.props.onAdd(this.state.budgetCategoryName);
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Budget Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the title of the budget category that you would like to add
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Budget Category Name"
            type="email"
            fullWidth
            onChange={this.handleBudgetCategoryNameFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddButtonClicked} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddBudgetDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddBudgetDialog;
