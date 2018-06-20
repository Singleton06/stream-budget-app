import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import BudgetAppBar from './BudgetAppBar';
import BudgetCategoriesContainer from './BudgetCategoriesContainer';
import { BudgetProvider } from './BudgetProvider';
import SummaryComponent from './Summary';
import BudgetSelectorTabs from './BudgetSelectorTabs';

import { ModalRoot, ModalConsumer, ModalProvider, ModalGlobalShortcutComponent } from './Modal';

const budgets = ['Food', 'Housing', 'Charity'];

const styles = {
  root: {
    flexGrow: 1
  },
  contentContainer: {
    marginLeft: '10px',
    marginRight: '10px'
  }
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <BudgetProvider>
          <ModalProvider>
            <BudgetAppBar title="Budget Application" />
            <div className={classes.contentContainer}>
              <BudgetSelectorTabs />
              <Grid container alignContent={'center'} spacing={16}>
                <Grid item spacing={8}>
                  <BudgetCategoriesContainer budgets={budgets} />
                </Grid>
                <Grid item spacing={8}>
                  <SummaryComponent />
                </Grid>
              </Grid>
            </div>
            <ModalConsumer>{modalConsumer => <ModalGlobalShortcutComponent consumer={modalConsumer} />}</ModalConsumer>
            <ModalRoot />
          </ModalProvider>
        </BudgetProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
