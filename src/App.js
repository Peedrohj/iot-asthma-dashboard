import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { API } from "aws-amplify";

import { Backdrop } from "@material-ui/core";

import GlobalStyle from "./styles/Global";
import Routes from "./routes";

import animatedLogo from "./assets/ripple-animated.gif";

import { makeStyles } from "@material-ui/core/styles";
import { fetchChildInformation } from "./services/firebase";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },

  logo: {
    width: "322px",
  },
}));

const App = () => {
  const [loader, setLoader] = useState(false);
  const [basicInformation, setbasicInformation] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setLoader(true);

    fetchChildInformation();

    const child = JSON.parse(localStorage.getItem("childInformation"));
    console.log("DEBUG child from local: ", child);

    if (child) {
      console.log("ENTER");

      setLoader(false);
      setbasicInformation(true);
    }

    console.log("loader: ", loader);
    console.log("loader: ", basicInformation);
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={loader}>
        <img
          src={animatedLogo}
          className={classes.logo}
          alt="Gif projeto rippo"
        ></img>
      </Backdrop>

      {basicInformation ? (
        <Router>
          <GlobalStyle />
          {/* <Box m={2}> */}
          <Routes />
          {/* </Box> */}
        </Router>
      ) : null}
    </>
  );
};

export default App;
