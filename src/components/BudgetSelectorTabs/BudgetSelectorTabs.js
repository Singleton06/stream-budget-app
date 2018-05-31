import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddCircle from '@material-ui/icons/AddCircle';

import {BudgetConsumer} from "../BudgetProvider";
import {ModalConsumer, AddBudgetModal} from "../Modal";

import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
  addButton: {
    width: "10px",
    minWidth: "25px"
  }
});

const addBudgetKey = 'add_budget';

const renderTabs = (budgets, budgetConsumer, modalConsumer, classes) => {
  const onChangeCallback = (event, value) => {
    if (value === addBudgetKey) {
      modalConsumer.showModal(AddBudgetModal);
      return;
    }
    budgetConsumer.updateCurrentlySelectedBudget(value);
  };

  return (
    <Tabs value={budgets.find(budget => budget.isCurrentlySelectedBudget).uuid} onChange={onChangeCallback}>
      {budgets.map(budget => <Tab key={budget.uuid} label={budget.name} value={budget.uuid}/>)}
      <Tab key={addBudgetKey} icon={<AddCircle />} value={addBudgetKey} className={classes.addButton} />
    </Tabs>
  );
};

const BudgetSelectorTabs = (props) => {
  const {classes} = props;
  return (
    <BudgetConsumer>
      {budgetConsumer => (
        <ModalConsumer>
          {modalConsumer => renderTabs(budgetConsumer.getBudgetsList(), budgetConsumer, modalConsumer, classes)}
        </ModalConsumer>
      )}
    </BudgetConsumer>
  );
};

export default withStyles(styles)(BudgetSelectorTabs);