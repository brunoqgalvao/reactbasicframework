import React, { useState } from "react";
import { useAuth } from "../../states/AuthState";
import { useAlert } from "../../states/AlertState";
import { useModal } from "../../states/ModalState";
import { useDict } from "./../../states/LangState";
import { goToLogin } from "../../services/dynamicRouting";
import MyAvatarEditor from "./AvatarEditor/MyAvatarEditor";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";

function Register(props) {
  const { classes } = props;
  const dictionary = useDict();
  const  alert  = useAlert();
  const { register, registerWithPicture } = useAuth();
  const modal = useModal();

  // I'm produce state using useState.
  // The second parameter that will keep the first parameter value will change the value.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [imageBlob, setImageBlob] = React.useState("");

  //When the form is submitted it will run
  function onRegister(e) {
    e.preventDefault(); //blocks the postback event of the page
    if(validPasswords(password,confirmPassword)){
      imageBlob?
        registerWithPicture(name, email, password,imageBlob):
        register(name,email,password);
    } else {
      alert.show(dictionary.get("login.confirmPasswordDoesntMatch"));
    }
  }

  // how to i put this is some sort of middleware? should this be on backend? think so.
  function validPasswords(password,confirmPassword) {
    return password === confirmPassword
  }

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {dictionary.get("home.register")}
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">
              {dictionary.get("register.name")}
            </InputLabel>
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
            <InputLabel htmlFor="email">
              {dictionary.get("login.emailLabel")}
            </InputLabel>
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
            <InputLabel htmlFor="password">
              {dictionary.get("login.passwordLabel")}
            </InputLabel>
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
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirm-password">
              {dictionary.get("login.confirmPasswordLabel")}
            </InputLabel>
            {/* When the password field is changed, setPassword will run and assign the password to the value in the input. */}
            <Input
              name="confirm-password"
              type="password"
              id="confirm-password"
              autoComplete="off"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button
            fullWidth
            variant="outlined"
            component="span"
            className={classes.button}
            onClick={() => modal.open("avatarEditor")}
          >
            {dictionary.get("login.addProfilePicture")}
          </Button>
          <Modal
            className={styles.main}
            open={modal.isOpen("avatarEditor")}
            onClose={() => modal.close("avatarEditor")}
          >
            <MyAvatarEditor imageBlobState={[imageBlob,setImageBlob]}/>
          </Modal>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onRegister}
            className={classes.submit}
          >
            {dictionary.get("home.register")}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={goToLogin}
          >
            {dictionary.get("register.goBackToLogin")}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Register);
