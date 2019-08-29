import React, { useState } from "react";
import { useAuth } from "../../states/AuthState";
import { goToLogin } from '../../services/dynamicRouting';
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
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";

function Register(props) {
  
  const { classes } = props;
  const { register } = useAuth();

  // I'm produce state using useState.
  // The second parameter that will keep the first parameter value will change the value.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //When the form is submitted it will run
  function onRegister(e) {
    e.preventDefault(); //blocks the postback event of the page
    console.log("email: " + email);
    console.log("password: " + password);
    console.log("name: " + name);
    register(name, email, password);
  }

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Account
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            {/* When the name field is changed, setName will run and assign the name to the value in the input. */}
            <Input
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            {/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
            <Input
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            {/* When the password field is changed, setPassword will run and assign the password to the value in the input. */}
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
            onClick={onRegister}
            className={classes.submit}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={goToLogin}
          >
            Go back to Login
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Register);
