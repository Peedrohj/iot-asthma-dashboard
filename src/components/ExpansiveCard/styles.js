import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;

  background: #f8f8f8;

  display: flex;
  border-radius: 11px;

  flex-direction: column;

  align-items: flex-start;

  /* position: absolute; */

  height: 100%;
`;

const Card = styled.div`
  width: 100%;
  border-radius: 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  margin: 24px 0;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;

  color: #323232;
`;

const SectionBody = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  padding: 12px 12px 0px 12px;
`;

const Navigation = styled.div`
  background: rgba(196, 196, 196, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-width: 30px;
  min-height: 30px;
`;

export { Container, Card, Row, SectionTitle, SectionBody, Navigation };
