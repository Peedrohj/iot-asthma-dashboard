import React from "react";
import { Container, Title, Navigation } from "./styles";
import { withRouter } from "react-router-dom";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const getColor = (name) => {
  switch (name) {
    case "Estatísticas":
      return "#A3C744";

    default:
      return "#000";
  }
};

const pathName = (name) => {
  switch (name) {
    case "/dashboard":
      return "Estatísticas";

    default:
      return "Home";
  }
};

const SecondaryHeader = (props) => {
  const routerName = pathName(props.location.pathname);

  return (
    <Container>
      <Navigation onClick={props.history.goBack}>
        <ArrowBackIosRoundedIcon style={{ color: "white" }} />
      </Navigation>
      <Title color={getColor(routerName)}>{routerName}</Title>
    </Container>
  );
};

export default withRouter(SecondaryHeader);
