import React from 'react';

import BudgetListDialog from './BudgetListDialog';
import {ModalConsumer} from '../Modal';
import {BudgetConsumer} from '../BudgetProvider';

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