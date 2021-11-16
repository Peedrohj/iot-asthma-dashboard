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

const FluxoWrapper = (props) => {
  return (
    <Container direction="column">
      <Title>Intensidade fluxo do ar</Title>
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
          title="Intensidade do Fluxo de Ar"
          labels={props.label}
          data={props.data}
          ytitle={"Nível da Fluxo de Ar"}
          xtitle={"Horários do dia"}
          max={3}
          min={0}
        />
      </div>

      <Title style={{ marginTop: "25px" }}>Incidência fluxo do ar</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
        }}
      >
        <IncidenceChart
          title="Incidência de Fluxo de Ar"
          labels={[
            "Fluxo normal",
            "Fluxo levemente prejudicado",
            "Fluxo obstruido",
            "Fluxo muito obstruido",
          ]}
          data={[
            (occurrencesOf(0, props.data) / props.data.length) * 100,
            (occurrencesOf(1, props.data) / props.data.length) * 100,
            (occurrencesOf(2, props.data) / props.data.length) * 100,
            (occurrencesOf(3, props.data) / props.data.length) * 100,
          ]}
          ytitle={"Nível da Fluxo de Ar"}
          xtitle={"Horários do dia"}
        />
      </div>
    </Container>
  );
};

export default FluxoWrapper;
