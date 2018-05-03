import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import BudgetAppBar from './BudgetAppBar';
import BudgetContainer from './BudgetContainer';
import BudgetProvider from './BudgetProvider';
import SummaryComponent from './Summary';

import {ModalRoot, ModalConsumer, ModalProvider, AddBudgetModal} from './Modal';

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
  constructor(props) {
    super(props);
  }

  createKeyDownHandler = (modalConsumer) => {
    return (event) => {
      console.log('callback handler', event.key);
      if (event.altKey && event.key === 'a') {
        modalConsumer.showModal(AddBudgetModal);
      }
    }
  }

  handleKeyPress(event) {
    console.log('handleKeyPress', event.key);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <BudgetProvider>
          <ModalProvider>
            <ModalConsumer>
              {modalConsumer => {
                return (
                  <div className={classes.root} onKeyDown={this.createKeyDownHandler(modalConsumer)}>
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
