import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable({ articles }) {
  const classes = useStyles();
  console.log(articles);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Body</TableCell>
              <TableCell align="right">Author Name&nbsp;(g)</TableCell>
              <TableCell align="right">Created At&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article._id}>
                <TableCell component="th" scope="row">
                  {article.title}
                </TableCell>
                <TableCell align="left">{article.body}</TableCell>
                <TableCell align="right">{article.authorName}</TableCell>
                <TableCell align="right">
                  {new Date(article.createdAt).toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
      </TableContainer>
      <br />
      <Link to="/">
        <Button color="primary" variant="outlined">
          Back to home
        </Button>
      </Link>
    </>
  );
}
