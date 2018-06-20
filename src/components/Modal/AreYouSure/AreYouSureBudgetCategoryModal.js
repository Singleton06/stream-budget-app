import React from 'react';
import PropTypes from 'prop-types';

import AreYouSureDialog from './AreYouSureDialog';
import { ModalConsumer } from '../ModalContext';
import { BudgetConsumer } from '../../BudgetProvider/index';

const AreYouSureBudgetCategoryModal = props => {
  return (
    <BudgetConsumer>
      {budgetConsumer => {
        return (
          <ModalConsumer>
            {modalConsumer => {
              return (
                <AreYouSureDialog
                  promptQuestion={`Are you sure that you want to remove the budget category "${
                    props.budgetCategoryName
                  }"?`}
                  onCancel={modalConsumer.hideModal}
                  onAccept={() => {
                    budgetConsumer.deleteBudgetCategory(props.budgetCategoryUUID);
                    modalConsumer.hideModal();
                  }}
                />
              );
            }}
          </ModalConsumer>
        );
      }}
    </BudgetConsumer>
  );
};

AreYouSureBudgetCategoryModal.propTypes = {
  budgetCategoryUUID: PropTypes.string.isRequired,
  budgetCategoryName: PropTypes.string.isRequired
};

export default AreYouSureBudgetCategoryModal;
