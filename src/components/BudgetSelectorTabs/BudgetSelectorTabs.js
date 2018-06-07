import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddCircle from '@material-ui/icons/AddCircle';
import Settings from '@material-ui/icons/Settings';

import {BudgetConsumer} from "../BudgetProvider";
import {AddBudgetModal, BudgetListModal, ModalConsumer} from "../Modal";

import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
  addButton: {
    width: "10px",
    minWidth: "25px"
  }
});

const addBudgetKey = 'add_budget';
const settingsKey = 'budget_settings';

const renderTabs = (budgets, budgetConsumer, modalConsumer, classes) => {
  const onChangeCallback = (event, value) => {
    if (value === addBudgetKey) {
      modalConsumer.showModal(AddBudgetModal);
      return;
    } else if (value === settingsKey) {
      modalConsumer.showModal(BudgetListModal);
      return;
    }
    budgetConsumer.updateCurrentlySelectedBudget(value);
  };

  const visibleTabs = budgets.filter(budget => budget.isVisible);
  return (
    <Tabs
      value={budgets.find(budget => budget.isCurrentlySelectedBudget).uuid}
      onChange={onChangeCallback}
      indicatorColor="primary"
    >
      {visibleTabs.map(budget => <Tab key={budget.uuid} label={budget.name} value={budget.uuid} />)}
      <Tab key={addBudgetKey} icon={<AddCircle />} value={addBudgetKey} className={classes.addButton} />
      <Tab key={settingsKey} icon={<Settings />} value={settingsKey} className={classes.addButton} />
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