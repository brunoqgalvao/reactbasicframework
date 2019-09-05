import React, { useState } from "react";
import { useAuth } from "../../states/AuthState";
import { useDict } from '../../states/LangState';
import { goToRegister } from '../../services/dynamicRouting'
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { styles } from "../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";

const Login = (props) => {
  const { classes } = props;
  const dictionary = useDict();
  console.log(dictionary);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

const onLogin =() => {
    console.log(email);
    console.log(password);
    login(email,password);
}

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        {dictionary.get('login.title')}
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{dictionary.get('login.emailLabel')}</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">
              {dictionary.get('login.passwordLabel')}
            </InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onLogin}
          >
            {dictionary.get('home.login')}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={goToRegister}
          >
            {dictionary.get('home.register')}
          </Button>
        </form>
      </Paper>
    </main>
  );
}


export default withStyles(styles)(Login);
