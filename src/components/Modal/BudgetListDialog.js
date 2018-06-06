import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';


const BudgetListDialog = props => (
  <Dialog open>
    <DialogTitle>Budget List Settings</DialogTitle>
    <DialogContent>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        {
          props.budgets.map(budget => <ListItem><ListItemText key={budget.uuid} primary={budget.name}/></ListItem>)
        }
      </List>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => props.onCancel()} color="primary">
        Cancel
      </Button>
      <Button onClick={() => {}} color="primary">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

BudgetListDialog.propTypes = {
  onCancel: PropTypes.func,
  budgets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    uuid: PropTypes.string
  }))
};

export default BudgetListDialog;