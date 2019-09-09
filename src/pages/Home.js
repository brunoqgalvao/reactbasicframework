import React from "react";
import { useDict } from '../states/LangState';
import {
  goToLogin,
  goToRegister,
  goToDashboard,
  goToLogout
} from "./../services/dynamicRouting";
import { useSession } from "../states/AuthState";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../services/styleProvider";

const Home = props => {
  const { classes } = props;
  const { isAuth, user } = useSession();
  const dictionary = useDict();
  const [photoURL, setPhotoURL] = React.useState("");
  
  React.useEffect(()=>{
    if(user != null){
      setPhotoURL(user.photoURL);
    }
  },[user])

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} src={photoURL}>
          {photoURL?"":<i className="fas fa-clock"></i>}
        </Avatar>

        <Typography component="h1" variant="h5">
          {!isAuth ? dictionary.get('home.greeting.loggedout') : `${dictionary.get('home.greeting.loggedin')} ${user.firstName}`}
        </Typography>
        {!isAuth ? (
          <>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              onClick={goToRegister}
              className={classes.submit}
            >
              {dictionary.get('home.register')}
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={goToLogin}
              className={classes.submit}
            >
              {dictionary.get('home.login')}
            </Button>
          </>
        ) : (
          <>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={goToDashboard}
              className={classes.submit}
            >
              {dictionary.get('home.dashboard')}
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              onClick={goToLogout}
              className={classes.submit}
            >
              {dictionary.get('home.logout')}
            </Button>
          </>
        )}
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Home);
