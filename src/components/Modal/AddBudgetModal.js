import React from 'react';

import AddItemDialog from './AddItemDialog';
import { ModalConsumer } from './ModalContext';
import { BudgetConsumer } from '../BudgetProvider';

const AddBudgetModal = props => (
  <BudgetConsumer>
    {budgetConsumer => {
      return (
        <ModalConsumer>
          {modalConsumer => {
            return (
              <AddItemDialog
                headerLabel="Add Budget"
                description="Please enter the title of the budget that you would like to add"
                onCancel={modalConsumer.hideModal}
                onAdd={budgetName => {
                  budgetConsumer.addNewBudget(budgetName);
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

export default AddBudgetModal;
