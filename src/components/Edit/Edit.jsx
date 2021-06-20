import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Edit() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [body, setBody] = useState("");
  // const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // console.log(window.location.href.split("/")[4].split("?")[0]);
  // console.log(URL);
  // console.log(
  //   `http://localhost:5000/api/v1/article/${
  //     window.location.href.split("/")[4].split("?")[0]
  //   }`
  // );
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  // const handlePhoto = (event) => {
  //   setPhoto(URL.createObjectURL(event.target.files[0]));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    let request = {
      title,
      authorName,
      body,
      // photo,
    };
    console.log("this a submit handler");
    axios
      .put(
        `/api/v1/article/${window.location.href.split("/")[4].split("?")[0]}`,
        request
      )
      .then((res) => {
        console.log("from the try");
        console.log(res);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Edit The Article
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Article Title"
                value={title}
                onChange={handleTitle}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="authorName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Your Name"
                value={authorName}
                onChange={handleAuthorName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="The Description"
                name="body"
                value={body}
                onChange={handleBody}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <Button
                component="label"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
              >
                Upload File
                <input type="file" hidden onChange={handlePhoto} />
              </Button>
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update This Blog
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "orange" }}>
                Back To Home
              </Link>
            </Grid>
          </Grid>
          {errorMessage && (
            <Grid container>
              <Grid item xs={12}>
                <Alert severity="error">
                  Please, Fill all fields in The right way
                </Alert>
              </Grid>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
}

export default Edit;
