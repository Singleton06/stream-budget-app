import React from 'react';
import PropTypes from 'prop-types';

import AddItemModal from './AddItemModal';
import {ModalConsumer} from './ModalContext';
import {BudgetContext} from '../BudgetProvider';

const AddLineItemModal = props => (
  <BudgetContext.Consumer>
    {budgetConsumer => {
      return (
        <ModalConsumer>
          {modalConsumer => {
            return (
              <AddItemModal
                headerLabel="Add Budget Line Item"
                description="Please enter the name of the line item that you would like to add"
                onCancel={modalConsumer.hideModal}
                onAdd={(lineItemName) => {
                  budgetConsumer.addNewBudgetLineItem(props.budgetName, lineItemName);
                  modalConsumer.hideModal();
                }}
                {...props}
              />
            );
          }}
        </ModalConsumer>
      );
    }}
  </BudgetContext.Consumer>
);

AddLineItemModal.propTypes = {
  budgetName: PropTypes.string.isRequired
}

export default AddLineItemModal;
