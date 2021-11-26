import { makeStyles } from "@material-ui/core";
import React from "react";

import cards from "../data/cardsInfo";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="cards-section">
      <ImageCard card={cards[2]} />
      <ImageCard card={cards[1]} />
      <ImageCard card={cards[0]} />
      <ImageCard card={cards[3]} />
    </div>
  );
}

export default Content;
