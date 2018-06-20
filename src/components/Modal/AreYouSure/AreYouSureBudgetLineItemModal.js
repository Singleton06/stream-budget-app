import React from 'react';
import PropTypes from 'prop-types';

import AreYouSureDialog from './AreYouSureDialog';
import { ModalConsumer } from '../ModalContext';
import { BudgetConsumer } from '../../BudgetProvider/index';

const AreYouSureBudgetLineItemModal = props => {
  return (
    <BudgetConsumer>
      {budgetConsumer => {
        return (
          <ModalConsumer>
            {modalConsumer => {
              return (
                <AreYouSureDialog
                  promptQuestion={`Are you sure that you want to remove the budget line item of "${
                    props.budgetCategoryLineItemName
                  }"?`}
                  onCancel={modalConsumer.hideModal}
                  onAccept={() => {
                    budgetConsumer.deleteBudgetLineItem(props.budgetCategoryUUID, props.budgetCategoryLineItemUUID);
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

AreYouSureBudgetLineItemModal.propTypes = {
  budgetCategoryUUID: PropTypes.string.isRequired,
  budgetCategoryLineItemUUID: PropTypes.string.isRequired,
  budgetCategoryLineItemName: PropTypes.string.isRequired
};

export default AreYouSureBudgetLineItemModal;
