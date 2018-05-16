import BudgetCategoryContainer from '../BudgetCategoryContainer';
import {BudgetConsumer} from '../BudgetProvider';
import {AddBudgetModal, ModalConsumer} from "../Modal";

import React from 'react';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: '1em',
    float: 'left',
    clear: 'left'
  }
});

const BudgetCategoriesContainer = (props) => {
  const { classes } =  props;
  return (
    <React.Fragment>
      <BudgetConsumer>
        {budgetConsumer => {
          return budgetConsumer.getBudgetCategoriesForCurrentBudget().map(budget => {
            return (
              <BudgetCategoryContainer
                key={budget.uuid}
                name={budget.name}
                budgetLineItems={budget.budgetLineItems}
                onBudgetUpdate={budgetConsumer.updateBudget}
              />
            );
          });
        }}
      </BudgetConsumer>
      <ModalConsumer>
        {modalConsumer => (
          <Button variant="raised" color="primary" className={classes.button}
                  onClick={() => modalConsumer.showModal(AddBudgetModal)}>
            Add Budget Category
          </Button>
        )}
      </ModalConsumer>
    </React.Fragment>
  );
};

export default withStyles(styles)(BudgetCategoriesContainer);
