import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';

import React from 'react';
import PropTypes from 'prop-types';

const styles = theme => ({
  appbar: {
    flexGrow: 1
  },
  dIcon: {},
  title: {
    flex: 1
  }
});

const BudgetAppBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.flexGrow} position="static">
      <Toolbar>
        <IconButton className={classes.addIcon}>
          <Icon>add_circle_outline</Icon>
        </IconButton>
        <Typography className={classes.title} variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

BudgetAppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(BudgetAppBar);
