import React from 'react';
import { TableCell, TableRow, TableHead } from 'material-ui/Table';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  tableHeading: {
    textAlign: 'left'
  }
});

const BudgetTableHead = props => {
  const { classes } = props;
  return (
    <TableHead>
      <TableRow>
        {props.names.map(singleName => {
          return (
            <TableCell
              key={singleName}
              padding="dense"
              className={classes.tableHeading}
            >
              {singleName}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

BudgetTableHead.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(BudgetTableHead);
