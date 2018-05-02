import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

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
        <IconButton className={classes.addIcon} onClick={props.onAddBudgetClicked}>
          <Icon>add_circle_outline</Icon>
        </IconButton>
        <Typography className={classes.title} variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

BudgetAppBar.defaultProps = {
  title: '',
  onAddBudgetClicked: () => {}
};

BudgetAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onAddBudgetClicked: PropTypes.func
};

export default withStyles(styles)(BudgetAppBar);
