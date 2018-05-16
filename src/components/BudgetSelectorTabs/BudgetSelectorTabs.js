import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';

import {BudgetConsumer} from "../BudgetProvider";
import {ModalConsumer, AddBudgetModal} from "../Modal";

const addBudgetKey = 'add_budget';
const addIcon = <Icon>add_circle</Icon>;

const renderTabs = (budgets, budgetConsumer, modalConsumer) => {
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
      <Tab key={addBudgetKey} icon={addIcon} value={addBudgetKey} />
    </Tabs>
  );
};

const BudgetSelectorTabs = () => {
  return (
    <BudgetConsumer>
      {budgetConsumer => (
        <ModalConsumer>
          {modalConsumer => renderTabs(budgetConsumer.getBudgetsList(), budgetConsumer, modalConsumer)}
        </ModalConsumer>
      )}
    </BudgetConsumer>
  );
};

export default BudgetSelectorTabs;