import React from 'react';
import PropTypes from 'prop-types';

import AddItemDialog from './AddItemDialog';
import { ModalConsumer } from './ModalContext';
import { BudgetConsumer } from '../BudgetProvider';

const AddLineItemModal = props => (
  <BudgetConsumer>
    {budgetConsumer => {
      return (
        <ModalConsumer>
          {modalConsumer => {
            return (
              <AddItemDialog
                headerLabel="Add Budget Line Item"
                description="Please enter the name of the line item that you would like to add"
                onCancel={modalConsumer.hideModal}
                onAdd={lineItemName => {
                  budgetConsumer.addNewBudgetLineItem(props.budgetCategoryUUID, lineItemName);
                  modalConsumer.hideModal();
                }}
                {...props}
              />
            );
          }}
        </ModalConsumer>
      );
    }}
  </BudgetConsumer>
);

AddLineItemModal.propTypes = {
  budgetCategoryUUID: PropTypes.string.isRequired
};

export default AddLineItemModal;
