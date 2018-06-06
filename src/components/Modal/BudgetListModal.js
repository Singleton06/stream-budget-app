import React from 'react';

import BudgetListDialog from './BudgetListDialog';
import {ModalConsumer} from '../Modal';
import {BudgetConsumer} from '../BudgetProvider';


const BudgetListModal = () => (
  <BudgetConsumer>
    {budgetConsumer => (
      <ModalConsumer>
        {modalConsumer => (
          <BudgetListDialog onCancel={modalConsumer.hideModal} budgets={budgetConsumer.getBudgetsList()}/>
        )}
      </ModalConsumer>
    )}
  </BudgetConsumer>
);

export default BudgetListModal;