import React from "react";
import { useDict } from "../../states/LangState";
import { useAlert } from "../../states/AlertState";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const Alert = () => {
  const alert = useAlert();
  const dictionary = useDict();

  const handleClose = id => {
    alert.hideById(id);
  };

  return alert.alerts.map(alert => (
    <Dialog
      key={alert.id}
      open={alert.show}
      onClose={() => handleClose(alert.id)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">{dictionary.get('alertBoxTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alert.message}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  ));
};

export default Alert;
