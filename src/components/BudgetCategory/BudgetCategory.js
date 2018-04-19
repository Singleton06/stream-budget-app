import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { BudgetTableHead, BudgetItemTableRow } from '../BudgetTable';
import BudgetLineItem from '../../models/BudgetLineItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const headings = [
  'Name',
  'Amount Budgeted',
  'Amount Spent',
  'Amount Remaining'
];

const createCallbackForLineItemProperty = (
  budgetName,
  lineItemName,
  propertyToUpdate,
  updateBudgetCallback,
  isNumberValue = true
) => {
  if (!updateBudgetCallback) {
    return () => {};
  }

  return newPropertyValue => {
    const newValue = isNumberValue
      ? Number(newPropertyValue.target.value)
      : newPropertyValue.target.value;

    updateBudgetCallback(budgetName, lineItemName, propertyToUpdate, newValue);
  };
};

const BudgetCategory = props => {
  const { classes } = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography>{props.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <BudgetTableHead names={headings} />
            <TableBody>
              {props.budgetLineItems.map(lineItem => {
                return (
                  <BudgetItemTableRow
                    key={lineItem.uuid}
                    content={lineItem}
                    disableAmountRemaining={true}
                    onChangeCallbacks={{
                      onNameChange: createCallbackForLineItemProperty(
                        props.name,
                        lineItem.name,
                        'name',
                        props.onBudgetUpdate,
                        false
                      ),
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
              })}
            </TableBody>
          </Table>
        </Paper>
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
