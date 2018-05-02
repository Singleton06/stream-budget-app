import React from 'react';

import AddItemModal from './AddItemModal';
import {ModalConsumer} from './ModalContext';
import {BudgetContext} from '../BudgetProvider';


const AddBudgetModal = props => (
  <BudgetContext.Consumer>
    {budgetConsumer => {
      return (
        <ModalConsumer>
          {modalConsumer => {
            return (
              <AddItemModal
                headerLabel="Add Budget Category"
                description="Please enter the title of the budget category that you would like to add"
                onCancel={modalConsumer.hideModal}
                onAdd={(budgetName) => {
                  budgetConsumer.addNewBudgetCategory(budgetName);
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

export default AddBudgetModal;
