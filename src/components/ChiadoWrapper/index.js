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

const ChiadoWrapper = (props) => {
  return (
    <Container direction="column">
      <Title>Incidência sibilo</Title>
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
          title="Intensidade do Sibilo"
          labels={props.label}
          data={props.data}
          ytitle={"Nível do Sibilo"}
          xtitle={"Horários do dia"}
          max={1}
          min={0}
        />
      </div>

      <Title style={{ marginTop: "25px" }}>Quantidade de ocorrência</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
        }}
      >
        <IncidenceChart
          title="Ocorrência de Sibilo"
          labels={["Sem Sibilo", "Com Sibilo"]}
          data={[
            (occurrencesOf(0, props.data) / props.data.length) * 100,
            (occurrencesOf(1, props.data) / props.data.length) * 100,
          ]}
          ytitle={"Nível do Sibilo"}
          xtitle={"Horários do dia"}
        />
      </div>
    </Container>
  );
};

export default ChiadoWrapper;
