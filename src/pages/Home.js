import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardIcon,
  CardHeader,
  CardText,
} from "../components/NavigationCard";

import Header from "../components/Header";
import ChildStatus from "../components/ChildStatus";

import { Box } from "@material-ui/core";
import barGraph from "../assets/barGraph.svg";
import hearth from "../assets/hearth.svg";
import { fetchChildInformation } from "../services/firebase";

// function to show child status
// Tosse Leve, Fluxo de Ar leve = 1
// Tosse Moderada, Fluxo de Ar Moderada = 2
// Tosse Intesa, Fluxo de Ar Inteso, Sibilo = 3
// else: 0
const getStatus = (status) => {
  if (
    status.asthmaAttack ||
    status.chiado ||
    status.fluxoAr > 2 ||
    status.tosse == 4
  ) {
    return 3;
  } else if (status.fluxoAr == 1 || status.tosse >= 2) {
    return 2;
  } else if (status.tosse < 2 && status.tosse > 0) {
    return 1;
  } else {
    return 0;
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 1:
      return "Foram identificados sintomas leves e espaçados";
    case 2:
      return "A criança apresentou sintomas de intensidade moderada, mas sem registro de sibilo";
    case 3:
      return "A criança apresentou sintomas graves e de alta intensidade, com registro de sibilo";
    default:
      return "A criança não apresentou sintomas";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return "#EAC91B";
    case 2:
      return "#FF9800";
    case 3:
      return "#CA1E3D";
    default:
      return "#A3C744";
  }
};

const Home = () => {
  const [childInformation, setChildInformation] = useState(
    JSON.parse(localStorage.getItem("childInformation"))
  );

  useEffect(() => {
    fetchChildInformation((childInformation) =>
      setChildInformation(childInformation)
    );
  }, []);

  return (
    <>
      <Header />
      <Box m={2}>
        <Card disableNavigation>
          <CardHeader icon={hearth} disableNavigation>
            <CardTitle color="#323232" center size="24px">
              Status atual da criança
            </CardTitle>
          </CardHeader>
          <CardText>
            {getStatusText(getStatus(childInformation.status))}
          </CardText>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChildStatus
              color={getStatusColor(getStatus(childInformation.status))}
            />
          </div>
        </Card>

        <Card to="/dashboard">
          <CardHeader icon={barGraph}>
            <CardTitle color="#A3C744">Estatísticas</CardTitle>
          </CardHeader>
          <CardText>
            <p>
              Veja mais detalhes sobre o <br />
              acompanhamento
            </p>
          </CardText>
        </Card>
      </Box>
    </>
  );
};

export default Home;
