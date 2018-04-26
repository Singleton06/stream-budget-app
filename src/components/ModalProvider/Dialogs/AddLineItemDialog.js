import React from 'react';
import PropTypes from 'prop-types';

import AddItemDialog from './AddItemDialog';

const AddLineItemDialog = props => (
  <AddItemDialog
    headerLabel="Add Budget Line Item"
    description="Please enter the name of the line item that you would like to add"
    {...props}
  />
);

export default AddLineItemDialog;
