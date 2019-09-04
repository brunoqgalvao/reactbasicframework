import React, { useEffect } from "react";
import { useAuth } from '../../states/AuthState'
import { goToHome } from "../../services/dynamicRouting";
import { styles } from "../../services/styleProvider";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const Logout = props => {
  const { classes } = props;
  const { logout } = useAuth();
  useEffect(()=> {
    logout()
    console.log('logged out')
  },[])

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Come back soon!
        </Typography>
        <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={goToHome}
              className={classes.submit}
            >
              Back to Home
            </Button>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Logout);
