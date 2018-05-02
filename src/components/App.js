import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import BudgetAppBar from './BudgetAppBar';
import BudgetContainer from './BudgetContainer';
import SummaryComponent from './Summary';
import ModalProvider, { ModalContext } from './ModalProvider';

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

class App extends React.Component {
  state = {
    addBudgetDialogOpen: false
  };

  toggleAddBudgetDialogState = () => {
    this.setState(prevState => ({
      addBudgetDialogOpen: !prevState.addBudgetDialogOpen
    }));
  };

  createCallbackForAddingBudget = budgetAddCallback => {
    return budgetName => {
      budgetAddCallback(budgetName);
      this.setState({
        addBudgetDialogOpen: false
      });
    };
  };

  render(props) {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ModalContext.Consumer>
          {consumer => {
            return <BudgetAppBar title="Budget Application" onAddBudgetClicked={consumer.toggleAddBudgetDialogState} />;
          }}
        </ModalContext.Consumer>
        <div className={classes.flexContainer}>
          <div className={classes.categoriesSection}>
            <BudgetContainer budgets={budgets} />
          </div>
          <div className={classes.summarySection}>
            <SummaryComponent />
          </div>
        </div>
        <ModalProvider />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
