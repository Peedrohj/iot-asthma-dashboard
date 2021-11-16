import React from "react";

import { Circle, Icon } from "./styles";

import heartIcon from "../../assets/heartIcon.svg";
const ChildStatus = (props) => {
  return (
    <div>
      <Circle color={props.color}>
        <Icon src={heartIcon} />
      </Circle>
    </div>
  );
};

export default ChildStatus;
