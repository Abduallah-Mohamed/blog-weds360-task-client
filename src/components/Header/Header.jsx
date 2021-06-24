import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3rem",
    marginLeft: "-20rem",
    minWidth: "100%",
    "& a": {
      textDecoration: "none",
      color: "orange",
      transform: ".3s ease all",
      "&:hover": {
        color: "white",
      },
    },
    position: "fixed",
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Blog Of Wedding
          </Typography>

          <Link to="/create">
            <Button color="inherit">Create</Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit">Register</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/users">
            <Button color="inherit">Users</Button>
          </Link>
          <Link to="/allArticles">
            <Button color="inherit">Articles</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
