import React from "react";
import {
  Container,
  SectionTitle,
  SectionBody,
  ContainerInformation,
  IconIformation,
  TextInformation,
  Row,
} from "./styles";

const ChildInformation = (props) => {
  return (
    <ContainerInformation>
      <IconIformation src={props.image} />
      <TextInformation>{props.children}</TextInformation>
    </ContainerInformation>
  );
};

export { Container, SectionTitle, SectionBody, ChildInformation, Row };
