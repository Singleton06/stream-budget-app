import React from 'react';

import AddItemModal from './AddItemModal';
import {ModalConsumer} from './ModalContext';
import {BudgetConsumer} from '../BudgetProvider';

const AddBudgetCategoryModal = props => (
  <BudgetConsumer>
    {budgetConsumer => {
      return (
        <ModalConsumer>
          {modalConsumer => {
            return (
              <AddItemModal
                headerLabel="Add Budget Category"
                description="Please enter the title of the budget category that you would like to add"
                onCancel={modalConsumer.hideModal}
                onAdd={(budgetCategoryName) => {
                  budgetConsumer.addNewBudgetCategory(budgetCategoryName);
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

export default AddBudgetCategoryModal;