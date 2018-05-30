import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const DELETE_BUTTON_HEADER = '';

const styles = () => ({
  tableHeading: {
    textAlign: 'left'
  }
});

const BudgetTableHead = props => {
  const {classes} = props;
  const headingNames = [...props.names];

  if (props.showDelete) {
    headingNames.push(DELETE_BUTTON_HEADER);
  }

  return (
    <TableHead>
      <TableRow>
        {headingNames.map(singleName => {
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

BudgetTableHead.defaultProps = {
  names: [],
  showDelete: false
};

BudgetTableHead.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  showDelete: PropTypes.bool
};

export default withStyles(styles)(BudgetTableHead);
