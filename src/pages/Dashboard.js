import React, { useState, useEffect } from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import moment from "moment";

import {
  Container,
  SectionTitle,
  SectionBody,
  ChildInformation,
  Row,
} from "../components/BodyComponents";

import SympthonsCard from "../components/sympthonsCard";
import CrisesWrapper from "../components/CrisesWrapper";
import TosseWrapper from "../components/TosseWrapper";
import ChiadoWrapper from "../components/ChiadoWrapper";
import FluxoWrapper from "../components/FluxoWrapper";

import weightIcon from "../assets/Weight.svg";
import heightIcon from "../assets/height.svg";
import childIcon from "../assets/childIcon.svg";
import ar from "../assets/ar.svg";
import bombinha from "../assets/bombinha.svg";
import pulmao from "../assets/pulmao.svg";
import tosse from "../assets/tosse.svg";

import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

const Dashboard = (props) => {
  const [childInformation, setChildInformation] = useState(
    JSON.parse(localStorage.getItem("childInformation"))
  );
  const [expandCard, setExpandCard] = useState();
  const startOfMonth = moment().startOf("month").format("x");
  const endOfMonth = moment().endOf("month").format("x");

  const startOfDay = moment().startOf("Day").format("x");
  const endOfDay = moment().endOf("Day").format("x");

  const totalCrisesInMonth = () => {
    const history = childInformation.history ? childInformation.history : [];

    const count = history.reduce((accumulator, currentValue) => {
      if (
        currentValue.asthmaAttack &&
        currentValue.createdAt > startOfMonth &&
        currentValue.createdAt < endOfMonth
      ) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);

    return count;
  };

  const getChildAge = () => {
    const birthdate = childInformation.birthdate;
    const now = moment(new Date(), "DD/MM/YYYY");
    const age = now.diff(moment(birthdate, "DD/MM/YYYY"), "years");

    return age;
  };

  const fetchChildInformation = async () => {
    try {
      const request = await API.graphql({
        query: queries.getChild,
        variables: { id: "0b3f25f8-964e-4557-8985-3b4d7626d6a6" },
      });
      const childRequest = await request.data.getChild;
      localStorage.setItem("childInformation", JSON.stringify(childRequest));

      return childRequest;
    } catch (error) {
      console.log("Error fetching child Information: ", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const request = await fetchChildInformation();
      setChildInformation(request);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const crises = childInformation?.history
    .filter((historyItem) => historyItem.asthmaAttack > 0)
    .reverse();

  const tosseArr = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => (item.tosse ? item.tosse : 0));

  const tosseTime = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => moment(item.createdAt, "x").format("HH"));

  const chiadoArr = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => (item.chiado ? item.chiado : 0));

  const chiadoTime = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => moment(item.createdAt, "x").format("HH"));

  const fluxoArArr = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => (item.fluxoAr ? item.fluxoAr : 0));

  const fluxoArTime = childInformation.history
    .filter((item) => item.createdAt > startOfDay && item.createdAt < endOfDay)
    .map((item) => moment(item.createdAt, "x").format("HH"));

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {console.log("tosse: ", fluxoArArr)}
      <div style={{ padding: "21px" }}>
        {/* TODO: create calendar component */}
        <SecondaryHeader />

        {/* <h1>Calendario...</h1> */}
      </div>
      {!expandCard && (
        <Container>
          <SectionBody>
            <SectionTitle>Registro diário</SectionTitle>
          </SectionBody>
          <SectionBody>
            <p
              style={{
                fontSize: "13px",
                color: "#323232",
              }}
            >
              Total de crises
            </p>
            <p
              style={{
                color: "#4490C7",
                fontSize: "18px",
              }}
            >
              {totalCrisesInMonth()} crises no mês
            </p>
            <Row>
              <ChildInformation image={weightIcon}>
                {childInformation.weight} kg
              </ChildInformation>
              <ChildInformation image={heightIcon}>
                {childInformation.height} cm
              </ChildInformation>
              <ChildInformation image={childIcon}>
                {getChildAge()} anos
              </ChildInformation>
            </Row>
          </SectionBody>

          <SympthonsCard onClick={() => setExpandCard("crises")} icon={ar}>
            Crises
          </SympthonsCard>
          <SympthonsCard onClick={() => setExpandCard("tosse")} icon={bombinha}>
            Tosse
          </SympthonsCard>
          <SympthonsCard onClick={() => setExpandCard("sibilo")} icon={pulmao}>
            Sibilo
          </SympthonsCard>
          <SympthonsCard onClick={() => setExpandCard("fluxoAr")} icon={tosse}>
            Fluxo de Ar
          </SympthonsCard>
        </Container>
      )}

      <Container>
        {expandCard === "crises" && <CrisesWrapper crises={crises} />}
        {/* Change for your component and remove this comment */}
        {expandCard === "tosse" && (
          <TosseWrapper data={tosseArr} label={tosseTime} />
        )}
        {expandCard === "sibilo" && (
          <ChiadoWrapper data={chiadoArr} label={chiadoTime} />
        )}
        {expandCard === "fluxoAr" && (
          <FluxoWrapper data={fluxoArArr} label={fluxoArTime} />
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
