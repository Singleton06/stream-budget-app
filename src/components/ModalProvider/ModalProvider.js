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

    return (
      // TODO: render ModalContext.Provider
      <BudgetContext.Consumer>
        {consumer => {
          return (
            <div>
              <AddBudgetDialog
                open={addBudgetDialogOpen}
                onAdd={this.createCallbackForAddingBudget(consumer.addNewBudgetCategory)}
                onCancel={this.toggleAddBudgetDialogState}
              />
              // render children here after all dialogs
            </div>
          );
        }}
      </BudgetContext.Consumer>
    );
  }
}

export default ModalProvider;
