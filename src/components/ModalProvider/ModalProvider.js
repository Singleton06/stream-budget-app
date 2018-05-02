import React from 'react';

import {BudgetContext} from '../BudgetProvider';
import {AddBudgetDialog, AddLineItemDialog} from './Dialogs';

export const ModalContext = React.createContext();

class ModalProvider extends React.Component {
  state = {
    addBudgetDialogOpen: false,
    addLineItemDialogOpen: false
  };

  openAddLineItemDialog = (budgetName) => {
    this.setState({
      addLineItemDialogOpen: true,
      currentBudgetToAddLineItemTo: budgetName
    });
  }

  toggleAddLineItemDialogState = (budgetName) => {
    this.setState(prevState => ({
      addLineItemDialogOpen: !prevState.addLineItemDialogOpen,
      currentBudgetToAddLineItemTo: !prevState.addLineItemDialogOpen ? undefined : budgetName
    }));
  }

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

  createCallbackForAddingLineItem

  render() {
    const {addBudgetDialogOpen, addLineItemDialogOpen} = this.state;
    const providerValue = {
      toggleAddBudgetDialogState: this.toggleAddBudgetDialogState,
      openAddLineItemDialog: this.openAddLineItemDialog
    };

    return (
      <ModalContext.Provider value={providerValue}>
        <BudgetContext.Consumer>
          {consumer => {
            return (
              <div>
                <AddBudgetDialog
                  open={addBudgetDialogOpen}
                  onAdd={this.createCallbackForAddingBudget(consumer.addNewBudgetCategory)}
                  onCancel={this.toggleAddBudgetDialogState}
                />
                <AddLineItemDialog
                  open={addLineItemDialogOpen}
                  onAdd={}
                  onCancel={this.toggleAddLineItemDialogState}
                />
                {this.props.children}
              </div>
            );
          }}
        </BudgetContext.Consumer>
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;
