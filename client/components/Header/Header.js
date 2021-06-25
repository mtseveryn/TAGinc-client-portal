import React from 'react'
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Avatar,
  Dialog,
} from "@material-ui/core";
import useStyles from "./styles";

const Header = () => {
  
  const classes = useStyles();

  const logout = ()=>{}

  return (
    <AppBar className={classes.appBar} position='sticky' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          // component={Link}
          // to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          TAGinc Client-Portal
        </Typography>
        {/* <img src={logo} alt="logo" height="60" /> */}
      </div>
      <Toolbar className={classes.toolbar}>
      <Button
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
