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
            <BudgetSelectorTabs />
            <Grid container spacing={0} alignContent={'center'}>
              <Grid sm={6}>
                <BudgetCategoriesContainer budgets={budgets} />
              </Grid>
              <Grid sm={6}>
                <SummaryComponent />
              </Grid>
            </Grid>
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
