import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import {BudgetTableHead, BudgetItemTableRow} from '../BudgetTable';
import BudgetLineItem from '../../models/BudgetLineItem';
import {ModalConsumer, AddLineItemModal} from '../Modal';

const styles = theme => ({
  budgetLineItemContainer: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    float: 'left',
    clear: 'left'
  },
  expansionDetails: {
    flexDirection: 'column'
  }
});

const headings = ['Name', 'Amount Budgeted', 'Amount Spent', 'Amount Remaining'];

const createCallbackForLineItemProperty = (budgetName,
                                           lineItemName,
                                           propertyToUpdate,
                                           updateBudgetCallback,
                                           isNumberValue = true) => {
  if (!updateBudgetCallback) {
    return () => {
    };
  }

  return newPropertyValue => {
    const newValue = isNumberValue ? Number(newPropertyValue.target.value) : newPropertyValue.target.value;

    updateBudgetCallback(budgetName, lineItemName, propertyToUpdate, newValue);
  };
};

const generateBudgetItemTableRowEntry = (props, lineItem) => {
  return (
    <BudgetItemTableRow
      key={lineItem.uuid}
      content={lineItem}
      disableAmountRemaining={true}
      onChangeCallbacks={{
        onNameChange: createCallbackForLineItemProperty(props.name, lineItem.name, 'name', props.onBudgetUpdate, false),
        onAmountBudgetedChanged: createCallbackForLineItemProperty(
          props.name,
          lineItem.name,
          'amountBudgeted',
          props.onBudgetUpdate
        ),
        onAmountSpentChanged: createCallbackForLineItemProperty(
          props.name,
          lineItem.name,
          'amountSpent',
          props.onBudgetUpdate
        )
      }}
    />
  );
};

const BudgetCategory = props => {
  const {classes} = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography>{props.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionDetails}>
        <Paper className={classes.budgetLineItemContainer}>
          <Table className={classes.table}>
            <BudgetTableHead names={headings}/>
            <TableBody>
              {props.budgetLineItems.map(lineItem => {
                return generateBudgetItemTableRowEntry(props, lineItem);
              })}
            </TableBody>
          </Table>
        </Paper>
        <div>
          <ModalConsumer>
            {consumer => {
              return (
                <Button variant="raised" color="primary" className={classes.button}
                      onClick={() => consumer.showModal(AddLineItemModal, {budgetName: props.name})}>
                  Add Line Item
                </Button>
              );
            }}
          </ModalConsumer>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

// TODO: add default props
BudgetCategory.propTypes = {
  name: PropTypes.string.isRequired,
  budgetLineItems: PropTypes.arrayOf(PropTypes.instanceOf(BudgetLineItem)),
  onBudgetUpdate: PropTypes.func
};

export default withStyles(styles)(BudgetCategory);
