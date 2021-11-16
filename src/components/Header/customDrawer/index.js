import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import mars from "../../../assets/mars-sidebar.svg";
import childImage from "../../../assets/child.png";

const CustomDrawer = ({ open, toggleDrawer }) => {
  const childInformation = JSON.parse(localStorage.getItem("childInformation"));
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Container fixed className={classes.container}>
        <Box pl={2}>
          <img
            src={childImage}
            className={classes.childImage}
            alt="Child"
          ></img>

          <h3 mt={2}>
            {childInformation.name} {childInformation.surname}
          </h3>
        </Box>
        <List>
          <Link to="/" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Container>
      <img src={mars} className={classes.marsSideBar} alt="Logo do mars"></img>
    </Drawer>
  );
};

export default CustomDrawer;
