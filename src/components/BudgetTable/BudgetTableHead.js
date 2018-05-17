import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
  tableHeading: {
    textAlign: 'left'
  }
});

const BudgetTableHead = props => {
  const {classes} = props;
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
