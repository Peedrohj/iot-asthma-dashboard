import styled from "styled-components";

const Container = styled.div`
  /* padding: 16px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  align-items: center;

  color: ${(props) => props.color || "#000"};
`;

const Navigation = styled.div`
  background: rgba(196, 196, 196, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export { Container, Title, Navigation };
