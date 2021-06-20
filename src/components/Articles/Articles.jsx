import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Article from "./Article/Article";
import axios from "axios";

function Articles({ token }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/article")
      .then((res) => {
        setIsLoading(true);
        // console.log(res.data);
        setArticles(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(articles);

  return (
    <Container maxWidth="lg" id="ar">
      <Grid container spacing={2}>
        <Grid item>
          {!isLoading && <Article articles={articles} token={token} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Articles;
