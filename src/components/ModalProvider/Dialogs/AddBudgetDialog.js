import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import React from 'react';
import PropTypes from 'prop-types';

import AddItemDialog from './AddItemDialog';

const AddBudgetDialog = props => (
  <AddItemDialog
    headerLabel="Add Budget Category"
    description="Please enter the title of the budget category that you would like to add"
    {...props}
  />
);

AddBudgetDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddBudgetDialog;
