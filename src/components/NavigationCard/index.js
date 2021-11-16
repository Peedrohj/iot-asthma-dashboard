import React from "react";
import { Body, Header, Title, Icon, Navigation, Text } from "./styles";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import { Link } from "react-router-dom";

const Card = (props) => {
  if (!props.disableNavigation) {
    return (
      <Link
        to={props.to}
        style={{
          textDecoration: "none",
        }}
      >
        <Body>{props.children}</Body>
      </Link>
    );
  } else {
    return <Body>{props.children}</Body>;
  }
};

const CardTitle = (props) => {
  return (
    <Title color={props.color} center={props.center} size={props.size}>
      {props.children}
    </Title>
  );
};

const CardIcon = (props) => {
  return <Icon src={props.icon}></Icon>;
};

const CardHeader = (props) => {
  return (
    <Header>
      <CardIcon icon={props.icon} />
      {props.children}
      {!props.disableNavigation ? (
        <CardNavigation>
          <ArrowForwardIosOutlinedIcon
            style={{
              color: "#fff",
            }}
            fontSize="small"
          />
        </CardNavigation>
      ) : null}
    </Header>
  );
};

const CardNavigation = (props) => {
  return <Navigation>{props.children}</Navigation>;
};

const CardText = (props) => {
  return <Text>{props.children}</Text>;
};

export { Card, CardTitle, CardIcon, CardText, CardHeader, CardNavigation };
