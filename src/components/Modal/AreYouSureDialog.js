import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const AreYouSureDialog = props => {
  console.log(props);
  return (
    <Dialog open aria-labelledby="form-dialog-title">
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.promptQuestion}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="default">
          No
        </Button>
        <Button onClick={props.onAccept} color="secondary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AreYouSureDialog.propTypes = {
  onCancel: PropTypes.func,
  onAccept: PropTypes.func,
  promptQuestion: PropTypes.string.isRequired
};

export default AreYouSureDialog;
