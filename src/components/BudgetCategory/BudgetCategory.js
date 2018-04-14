import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import BudgetCategoryHead from './Table/BudgetCategoryHead';
import BudgetLineItemRow from './Table/BudgetLineItemRow';
import BudgetLineItem from '../../models/BudgetLineItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  tableHeading: {
    textAlign: 'left'
  },
  table: {
    minWidth: 700
  }
});

const headings = ['Name', 'Amount Budgeted', 'Amount Spent', 'Amount Balance'];

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
            <BudgetCategoryHead names={headings} />
            <TableBody>
              {props.budgetLineItems.map(lineItem => {
                return (
                  <BudgetLineItemRow key={lineItem.name} content={lineItem} />
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

BudgetCategory.propTypes = {
  name: PropTypes.string.isRequired,
  budgetLineItems: PropTypes.arrayOf(BudgetLineItem)
};

export default withStyles(styles)(BudgetCategory);
