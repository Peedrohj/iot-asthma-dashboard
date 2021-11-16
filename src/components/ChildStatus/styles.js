import styled, { keyframes } from "styled-components";

const pulse = (color) => keyframes`
    0% {
        box-shadow: 0 0 0 0rem ${String(color + "66") || "rgba(0, 0, 0, 0.1)"},
                    0 0 0 2rem ${String(color + "66") || "rgba(0, 0, 0, 0.1)"},
                    0 0 0 3.5rem ${
                      String(color + "40") || "rgba(0, 0, 0, 0.1)"
                    };

    }
    100% {
        box-shadow: 0 0 0 2rem ${String(color + "66") || "rgba(0, 0, 0, 0.1)"},
                    0 0 0 3.5rem ${
                      String(color + "40") || "rgba(0, 0, 0, 0.1)"
                    },
                    0 0 0 5rem ${String(color + "00") || "rgba(0, 0, 0, 0.1)"};
    }

`;

const Circle = styled.div`
  margin: 80px 0;
  width: 95.31px;
  height: 95.31px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.color || "#ffffff"};

  border-radius: 50%;
  animation: ${(props) => pulse(props.color)} 2s infinite;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export { Circle, Icon };
