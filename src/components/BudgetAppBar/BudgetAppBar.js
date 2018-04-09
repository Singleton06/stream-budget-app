import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import React from "react";
import PropTypes from "prop-types";

const BudgetAppBar = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

BudgetAppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default BudgetAppBar;
