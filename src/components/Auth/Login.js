import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { styles } from '../../services/styleProvider'
import firebase from '../../services/firebaseUtils'

function Login(props) {
    const { classes } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onLogin}
                        >
                        Sign in
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        to="/register"
                        className={classes.submit}>
                        Register
                    </Button>
                </form>
            </Paper>
    </main>
    )

    
async function onLogin() {
    try {
      //The register in the Firebase class is running with useState data.
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}


export default withStyles(styles)(Login)