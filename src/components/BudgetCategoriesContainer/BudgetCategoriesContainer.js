import BudgetCategoryContainer from '../BudgetCategoryContainer';
import {BudgetConsumer} from '../BudgetProvider';
import {AddBudgetCategoryModal, ModalConsumer} from "../Modal";

import React from 'react';
import Button from 'material-ui/Button';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: '1em',
    float: 'left',
    clear: 'left'
  }
});

const renderAddBudgetCategoryButton = (classes, variant = 'flat') => {
  return (
    <ModalConsumer>
      {modalConsumer => (
        <Button variant={variant} color="primary" className={classes.button}
                onClick={() => modalConsumer.showModal(AddBudgetCategoryModal)}>
          Add Budget Category
        </Button>
      )}
    </ModalConsumer>
  );
}


const BudgetCategoriesContainer = (props) => {
  const {classes} = props;
  return (
    <React.Fragment>
      <BudgetConsumer>
        {budgetConsumer => {
          const budgetCategories = budgetConsumer.getBudgetCategoriesForCurrentBudget();

          if (budgetCategories.length === 0) {
            return <Typography variant="caption">There are currently no budget categories.</Typography>
          }

          return budgetCategories.map(budget => {
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
      {renderAddBudgetCategoryButton(classes)}
    </React.Fragment>
  );
};

export default withStyles(styles)(BudgetCategoriesContainer);
