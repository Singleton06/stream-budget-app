import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';

import {BudgetContext} from "../BudgetProvider";



const renderTabs = (budgets, selectionCallback) => {
  const onChangeCallback = (event, value) => selectionCallback(value);

  return (
    <Tabs value={budgets.find(budget => budget.isCurrentlySelectedBudget).uuid} onChange={onChangeCallback}>
      {budgets.map(budget => <Tab label={budget.name} value={budget.uuid}/>)}
    </Tabs>
  );
};

const BudgetSelectorTabs = () => {
  return (
    <BudgetContext.Consumer>
      {consumer => renderTabs(consumer.getBudgetsList(), consumer.updateCurrentlySelectedBudget)}
    </BudgetContext.Consumer>
  );
};

export default BudgetSelectorTabs;