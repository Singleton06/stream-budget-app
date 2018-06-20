import React from 'react';

import BudgetListDialog from './BudgetListDialog';
import { ModalConsumer } from '../index';
import { BudgetConsumer } from '../../BudgetProvider/index';

const BudgetListModal = () => (
  <BudgetConsumer>
    {budgetConsumer => (
      <ModalConsumer>
        {modalConsumer => (
          <BudgetListDialog
            onClose={modalConsumer.hideModal}
            budgets={budgetConsumer.getBudgetsList()}
            onDeleteBudget={budgetConsumer.deleteBudget}
            onBudgetToggle={budgetConsumer.toggleVisibilityForBudget}
          />
        )}
      </ModalConsumer>
    )}
  </BudgetConsumer>
);

export default BudgetListModal;
