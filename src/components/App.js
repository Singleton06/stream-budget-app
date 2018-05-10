import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import BudgetAppBar from './BudgetAppBar';
import BudgetContainer from './BudgetContainer';
import BudgetProvider from './BudgetProvider';
import SummaryComponent from './Summary';

import {ModalRoot, ModalConsumer, ModalProvider, AddBudgetModal, ModalGlobalShortcutComponent} from './Modal';

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

  render() {
    const {classes} = this.props;
    return (
      <div>
        <BudgetProvider>
          <ModalProvider>
            <ModalConsumer>
              {modalConsumer => {
                return (
                  <div className={classes.root}>
                    <BudgetAppBar title="Budget Application"
                                  onAddBudgetClicked={() => modalConsumer.showModal(AddBudgetModal)}/>
                    <div className={classes.flexContainer}>

                      <div className={classes.categoriesSection}>
                        <BudgetContainer budgets={budgets}/>
                      </div>

                      <div className={classes.summarySection}>
                        <SummaryComponent/>
                      </div>
                    </div>
                    <ModalGlobalShortcutComponent consumer={modalConsumer}/>
                  </div>
                );
              }}
            </ModalConsumer>
            <ModalRoot/>
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
