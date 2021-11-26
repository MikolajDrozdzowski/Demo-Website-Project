import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/sunset.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
