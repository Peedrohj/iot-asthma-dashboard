import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  margin: 7px 0;
`;

const Icon = styled.img`
  min-width: 30px;
  min-height: 30px;
`;

const Text = styled.h1`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;

  margin: 0 20px;
  width: 100%;
  color: #4490c7;
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

export { Card, Text, Navigation, Icon };
