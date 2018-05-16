import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';

const BudgetSelectorTabs = () => {
  return (
    <Tabs value={0}>
      <Tab label="May 2018 Budget" />
      <Tab label="June 2018 Budget" />
      <Tab label="July 2018 Budget" />
    </Tabs>
  );
};

export default BudgetSelectorTabs;