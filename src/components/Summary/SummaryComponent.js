import React from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SummaryTableBody from './SummaryTableBody';

import { BudgetTableHead, BudgetItemTableRow } from '../BudgetTable';

const styles = theme => ({
  root: {
    overflowX: 'auto'
  }
});

const headings = [
  'Name',
  'Amount Budgeted',
  'Amount Spent',
  'Amount Remaining'
];

const SummaryComponent = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Summary
      </Typography>
      <Table>
        <BudgetTableHead names={headings} />
        <SummaryTableBody />
      </Table>
    </Paper>
  );
};
//
export default withStyles(styles)(SummaryComponent);
