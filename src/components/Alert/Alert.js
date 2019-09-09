import React from "react";
import { useDict } from "../../states/LangState";
import { useAlert } from "../../states/AlertState";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";

const Alert = props => {
  const alert = useAlert();
  const dictionary = useDict();
  const { classes } = props;

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
      <DialogTitle id="alert-dialog-title" className={classes.alertTitle}>
        {dictionary.get("alertBoxTitle")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alert.message}
        </DialogContentText>
        <Grid container direction="row" justify="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleClose(alert.id)}
          >
            OK
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  ));
};

export default withStyles(styles)(Alert);
