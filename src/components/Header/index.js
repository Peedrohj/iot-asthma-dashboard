import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { withRouter } from "react-router";

import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

import CustomDrawer from "./customDrawer";

const Header = (props) => {
  const classes = useStyles();

  const [drawer, setdrawer] = useState(false);

  const toggleDrawer = () => {
    setdrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <div className={classes.column}>
          <p className={classes.title}>Olá,</p>
          <p className={classes.subtitle}>acompanhe a criança</p>
        </div>
        <IconButton
          onClick={toggleDrawer}
          aria-label="menu"
          style={{
            padding: "0",
          }}
          className={classes.iconMenu}
        >
          <MenuIcon className={classes.iconMenu} />
        </IconButton>
      </div>

      <CustomDrawer open={drawer} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default withRouter(Header);
