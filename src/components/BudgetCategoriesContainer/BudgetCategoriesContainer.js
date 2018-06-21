import BudgetCategoryContainer from '../BudgetCategoryContainer';
import { BudgetConsumer } from '../BudgetProvider';
import { AddBudgetCategoryModal, ModalConsumer } from '../Modal';

import React from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
        <Button
          variant={variant}
          color="primary"
          className={classes.button}
          onClick={() => modalConsumer.showModal(AddBudgetCategoryModal)}
        >
          Add Budget Category
        </Button>
      )}
    </ModalConsumer>
  );
};

const BudgetCategoriesContainer = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <BudgetConsumer>
        {budgetConsumer => {
          const budgetCategories = budgetConsumer.getBudgetCategoriesForCurrentBudget();

          if (budgetCategories.length === 0) {
            const areThereAnyVisibleBudgets =
              budgetConsumer.getBudgetsList().filter(budget => budget.isVisible).length > 0;
            if (areThereAnyVisibleBudgets) {
              return (
                <React.Fragment>
                  <Typography variant="caption">
                    There are currently no budget categories. Please add one by clicking the button below.
                  </Typography>
                  {renderAddBudgetCategoryButton(classes)}
                </React.Fragment>
              );
            } else {
              return <Typography variant="caption">There are currently no budgets. Please add one above.</Typography>;
            }
          }

          const budgetCategoryElements = budgetCategories.map(budgetCategory => {
            return (
              <BudgetCategoryContainer
                key={budgetCategory.uuid}
                name={budgetCategory.name}
                uuid={budgetCategory.uuid}
                budgetLineItems={budgetCategory.budgetLineItems}
                onBudgetUpdate={budgetConsumer.updateBudget}
                onBudgetCategoryDelete={budgetConsumer.deleteBudgetCategory}
              />
            );
          });

          return (
            <React.Fragment>
              {budgetCategoryElements}
              {renderAddBudgetCategoryButton(classes)}
            </React.Fragment>
          );
        }}
      </BudgetConsumer>
    </React.Fragment>
  );
};

export default withStyles(styles)(BudgetCategoriesContainer);
