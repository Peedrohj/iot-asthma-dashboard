import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: flex-end;
`;

const Container = styled.div`
  width: 100%;

  padding: 16px;
  background-color: #ffffff;
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  border-radius: 46px 46px 0 0;

  /* position: absolute; */

  height: 100%;
`;
const SectionBody = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  padding: 12px;
`;

const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;

  color: #323232;
`;

const ContainerInformation = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;

  align-items: flex-end;
`;

const IconIformation = styled.img`
  height: 25px;
  width: 25px;
`;

const TextInformation = styled.p`
  margin-left: 5px;
  font-size: 18px;
  color: #323232;
`;

export {
  Container,
  SectionBody,
  SectionTitle,
  ContainerInformation,
  IconIformation,
  TextInformation,
  Row,
};
