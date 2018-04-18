import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { BudgetProvider } from './BudgetProvider';
import BudgetAppBar from './BudgetAppBar';
import BudgetContainer from './BudgetContainer';
import SummaryComponent from './Summary';

const budgets = ['Food', 'Housing', 'Charity'];

const styles = {
  root: {
    flexGrow: 1
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'stretch'
  },
  summarySection: {
    flexGrow: '7'
  },
  categoriesSection: {
    flexGrow: '3'
  }
};

const App = props => {
  const { classes } = props;
  return (
    <BudgetProvider>
      <div className={classes.root}>
        <BudgetAppBar title="Budget Application" />
        <div className={classes.flexContainer}>
          <div className={classes.categoriesSection}>
            <BudgetContainer budgets={budgets} />
          </div>
          <div className={classes.summarySection}>
            <SummaryComponent />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
