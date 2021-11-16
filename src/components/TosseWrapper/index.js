import React from "react";

import IntensityChart from "../IntensityChart";
import IncidenceChart from "../IncidenceChart";
import { Container, Title, Text } from "./styles";

const occurrencesOf = (number, numbers) =>
  numbers.reduce(
    (counter, currentNumber) =>
      number === currentNumber ? counter + 1 : counter,
    0
  );

const TosseWrapper = (props) => {
  return (
    <Container direction="column">
      <Title>Intensidade da tosse</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
          padding: 0,
        }}
      >
        <IntensityChart
          title="Intensidade da tosse"
          labels={props.label}
          data={props.data}
          ytitle={"Nível da Tosse"}
          xtitle={"Horários do dia"}
          max={3}
          min={0}
        />
      </div>

      <Title style={{ marginTop: "25px" }}>Incidência de Tosse</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
        }}
      >
        <IncidenceChart
          title="Intensidade da tosse"
          labels={[
            "Sem Tosse",
            "Tosse Leve",
            "Tosse Moderada",
            "Tosse Intensa",
          ]}
          data={[
            (occurrencesOf(0, props.data) / props.data.length) * 100,
            (occurrencesOf(1, props.data) / props.data.length) * 100,
            (occurrencesOf(2, props.data) / props.data.length) * 100,
            (occurrencesOf(3, props.data) / props.data.length) * 100,
          ]}
          ytitle={"Nível da Tosse"}
          xtitle={"Horários do dia"}
        />
      </div>
    </Container>
  );
};

export default TosseWrapper;
