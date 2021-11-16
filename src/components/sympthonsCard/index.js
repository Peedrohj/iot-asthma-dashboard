import React from "react";

import { Card, Text, Navigation, Icon } from "./styles";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const SympthonsCard = (props) => {
  return (
    <Card>
      <ButtonBase
        onClick={props.onClick}
        style={{ display: "flex", flex: 1, padding: 12 }}
      >
        <Icon src={props.icon}></Icon>
        <Text>{props.children}</Text>
        <Navigation>
          <ArrowForwardIosOutlinedIcon
            style={{ color: "white" }}
            fontSize="small"
          />
        </Navigation>
      </ButtonBase>
    </Card>
  );
};

export default SympthonsCard;
