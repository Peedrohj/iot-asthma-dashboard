import styled from "styled-components";

const Body = styled.div`
  background: #ffffff;
  border-radius: 11px;
  padding: 16px;
  margin: 16px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0 16px;
  width: 100%;

  font-weight: 600;
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.color || "#000"};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.center || "flex-start"};
`;

const Icon = styled.img`
  min-width: 20px;
  min-height: 20px;

  color: ${(props) => props.color || "#000"};
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

const Text = styled.div`
  margin-top: 10px;
  font-weight: 300;

  display: flex;
  align-items: center;

  color: #8c8c8c;
`;

export { Body, Header, Title, Icon, Navigation, Text };
