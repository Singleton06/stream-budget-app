import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.props.onCancel && this.props.onCancel();
    } else if (event.key === 'Enter') {
      this.handleAddButtonClicked();
    }
  };

  render() {
    return (
      <Dialog open aria-labelledby="form-dialog-title" onKeyDown={this.handleKeyPress}>
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
          <Button onClick={this.props.onCancel} color="default">
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
  description: PropTypes.string.isRequired
};

export default AddItemDialog;
