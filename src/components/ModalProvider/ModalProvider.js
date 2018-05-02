import React from 'react';

import { BudgetContext } from '../BudgetProvider';
import { AddBudgetDialog } from './Dialogs';

export const ModalContext = React.createContext();

class ModalProvider extends React.Component {
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

  render() {
    const { addBudgetDialogOpen } = this.state;
    const self = this;

    return (
      <ModalContext.Provider
        value={{
          toggleAddBudgetDialogState: this.toggleAddBudgetDialogState
        }}
      >
        <BudgetContext.Consumer>
          {consumer => {
            return (
              <div>
                <AddBudgetDialog
                  open={addBudgetDialogOpen}
                  onAdd={self.createCallbackForAddingBudget(consumer.addNewBudgetCategory)}
                  onCancel={self.toggleAddBudgetDialogState}
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
