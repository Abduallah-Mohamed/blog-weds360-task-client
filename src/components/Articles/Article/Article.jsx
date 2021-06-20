import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Article.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ articles }) {
  const classes = useStyles();
  // console.log(articles);

  return (
    <div className="theRoot">
      {articles.map((article) => (
        <Card className={classes.root} key={article._id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`/uploads/${article.photo}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {article.title}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {article.authorName} -{" "}
                {new Date(article.createdAt).toDateString()}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              onClick={async () => {
                await axios.delete(`/api/v1/article/${article.id}`);
                window.location.reload();
              }}
              color="secondary"
            >
              Delete
            </Button>
            <Link to={`/edit/${article._id}`}>
              <Button size="small" color="primary">
                Edit
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
