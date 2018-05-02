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
