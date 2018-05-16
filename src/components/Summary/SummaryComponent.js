import React from 'react';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SummaryTableBody from './SummaryTableBody';

import { BudgetTableHead } from '../BudgetTable';

const styles = () => ({
  root: {
    overflowX: 'auto',
    flexGrow: 1
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
