import React from "react";

import ExpansiveCard from "../ExpansiveCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Container, SectionTitle, SectionBody, Row } from "./styles";

const getStrokeColor = (percentual) => {
  if (percentual < 100) {
    return "#EAC91B";
  } else {
    return "#CA1E3D";
  }
};

const CrisesWrapper = (props) => {
  const { crises } = props;

  return (
    <>
      <SectionBody>
        <SectionTitle>Crises</SectionTitle>
      </SectionBody>
      <SectionBody>
        <p
          style={{
            fontSize: "13px",
            color: "#323232",
          }}
        >
          Atualização em tempo real
        </p>
        <div>
          {crises.map((crisis) => {
            const chiadoPercentual = crisis.chiado ? 100 : 0;
            const fluxoPercentual = crisis.fluxoAr
              ? Math.round((crisis.fluxoAr / 3) * 100)
              : 0;
            const tossePercentual = crisis.tosse
              ? Math.round((crisis.tosse / 3) * 100)
              : 0;
            return (
              <ExpansiveCard id={crisis.createdAt} key={crisis.createdAt} date={crisis.createdAt}>
                <Row>
                  <div style={{ margin: 16 }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#323232",
                        marginBottom: 8,
                      }}
                    >
                      Chiado
                    </p>
                    <CircularProgressbar
                      value={chiadoPercentual}
                      text={`${chiadoPercentual}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: getStrokeColor(chiadoPercentual),
                      })}
                    />
                  </div>
                  <div style={{ margin: 16 }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#323232",
                        marginBottom: 8,
                      }}
                    >
                      Fluxo do ar
                    </p>
                    <CircularProgressbar
                      value={fluxoPercentual}
                      text={`${fluxoPercentual}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: getStrokeColor(fluxoPercentual),
                      })}
                    />
                  </div>
                  <div style={{ margin: 16 }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#323232",
                        marginBottom: 8,
                      }}
                    >
                      Tosse
                    </p>
                    <CircularProgressbar
                      value={tossePercentual}
                      text={`${tossePercentual}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: getStrokeColor(tossePercentual),
                      })}
                    />
                  </div>
                </Row>
              </ExpansiveCard>
            );
          })}
        </div>
      </SectionBody>
    </>
  );
};

export default CrisesWrapper;
