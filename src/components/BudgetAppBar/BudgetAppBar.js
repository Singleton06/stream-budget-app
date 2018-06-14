import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';
import PropTypes from 'prop-types';

const styles = () => ({
  flexGrow: {
    flexGrow: 1
  },
  addIcon: {},
  title: {
    flex: 1
  }
});

const BudgetAppBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.flexGrow} position="static">
      <Toolbar>
        <Typography className={classes.title} variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

BudgetAppBar.defaultProps = {
  title: ''
};

BudgetAppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(BudgetAppBar);
