import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import BudgetAppBar from './BudgetAppBar';
import BudgetCategoriesContainer from './BudgetCategoriesContainer';
import {BudgetProvider} from './BudgetProvider';
import SummaryComponent from './Summary';
import BudgetSelectorTabs from './BudgetSelectorTabs';

import {ModalRoot, ModalConsumer, ModalProvider, ModalGlobalShortcutComponent} from './Modal';

const budgets = ['Food', 'Housing', 'Charity'];

const styles = {
  root: {
    flexGrow: 1
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'stretch'
  },
  categoriesSection: {
    flexGrow: 1
  }
};

class App extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div>
        <BudgetProvider>
          <ModalProvider>
            <div className={classes.root}>
              <BudgetAppBar title="Budget Application"/>
              <BudgetSelectorTabs/>
              <div className={classes.flexContainer}>
                <div className={classes.categoriesSection}>
                  <BudgetCategoriesContainer budgets={budgets}/>
                </div>
                <div>
                  <SummaryComponent/>
                </div>
              </div>

              <ModalConsumer>
                {modalConsumer => (<ModalGlobalShortcutComponent consumer={modalConsumer}/>)}
              </ModalConsumer>
            </div>
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
