import {
  AppBar,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    backgroundColor: "black",
    fontFamily: "Nunito",
    opacity: "0.75",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "97%",
    },
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "pink",
  },
  container: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "135px",
    },
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
  },
  goDown: {
    color: "pink",
    fontSize: "4rem",
  },
  navButton: {
    margin: "0 15px",
    fontWeight: "700",
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My <span className={classes.colorText}>Website</span>
          </h1>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapseheight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My{" "}
            <span className={classes.colorText}>Website.</span>
          </h1>
          <Scroll to="cards-section" smooth={true} offset={-70}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
