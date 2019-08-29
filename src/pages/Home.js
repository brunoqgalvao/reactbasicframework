import React from 'react'
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import { styles } from '../services/styleProvider'

const Home = (props) => {
  const { classes } = props

  return (
      <main className={classes.main}>
          <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
              </Avatar>
              <Typography component="h1" variant="h5">
                  Hi Steemit User
              </Typography>
              <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/register"
                    className={classes.submit}>
                    Register
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/login"
                    className={classes.submit}>
                    Login
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/dashboard"
                    className={classes.submit}>
                    Dashboard
                </Button>
          </Paper>
      </main>
  )
}

export default withStyles(styles)(Home)