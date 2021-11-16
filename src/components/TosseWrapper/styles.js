import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  padding: 16px;
  background-color: #ffffff;
  display: flex;

  flex-direction: ${(props) => props.direction || "row"};

  align-items: flex-start;
  border-radius: 46px 46px 0 0;

  /* position: absolute; */

  height: 100%;
`;

const Icon = styled.img`
  min-width: 30px;
  min-height: 30px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;

  color: #323232;
`;

const Text = styled.p`
  /* margin-left: 5px; */
  font-size: 13px;
  color: #323232;
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

export { Container, Text, Title };
