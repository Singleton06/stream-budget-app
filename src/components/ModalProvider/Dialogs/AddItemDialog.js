import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import React from 'react';
import PropTypes from 'prop-types';

class AddItemDialog extends React.Component {
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
        <DialogTitle id="form-dialog-title">{this.props.headerLabel}</DialogTitle>
        <DialogContent>
          <DialogContentText>{this.props.description}</DialogContentText>
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

AddItemDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  headerLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRerquired
};

export default AddItemDialog;
