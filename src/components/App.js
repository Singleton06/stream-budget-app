import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import BudgetAppBar from './BudgetAppBar';
import BudgetContainer from './BudgetContainer';
import BudgetProvider from './BudgetProvider';
import SummaryComponent from './Summary';

import {ModalRoot, ModalConsumer, ModalProvider, AddBudgetModal } from './Modal';

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

  render(props) {
    const {classes} = this.props;
    return (
      <BudgetProvider>
        <ModalProvider>

          <div className={classes.root}>
            <ModalConsumer>
              {consumer => {
                return <BudgetAppBar title="Budget Application"
                                     onAddBudgetClicked={() => consumer.showModal(AddBudgetModal)} />;
              }}
            </ModalConsumer>
            <div className={classes.flexContainer}>
              <div className={classes.categoriesSection}>
                <BudgetContainer budgets={budgets}/>
              </div>
              <div className={classes.summarySection}>
                <SummaryComponent/>
              </div>
            </div>

          </div>
          <ModalRoot/>
        </ModalProvider>
      </BudgetProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
