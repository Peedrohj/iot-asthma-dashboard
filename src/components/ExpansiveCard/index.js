import React, { useState } from "react";

import { Container, Card, Row, SectionTitle, Navigation } from "./styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ButtonBase } from "@material-ui/core";
import moment from "moment";

const ExpansiveCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { date } = props;
  return (
    <Card>
      <Container>
        <ButtonBase
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: "100%", padding: 12, paddingBottom: isOpen ? 0 : 12 }}
        >
          <Row>
            <SectionTitle>
              Crise dia {moment(date, "x").format("DD/MM")}
            </SectionTitle>
            <Navigation>
              {isOpen ? (
                <KeyboardArrowUpIcon style={{ color: "white" }} />
              ) : (
                <KeyboardArrowDownIcon style={{ color: "white" }} />
              )}
            </Navigation>
          </Row>
        </ButtonBase>
        {isOpen && (
          <div style={{ paddingLeft: 12 }}>
            <p
              style={{
                fontSize: "13px",
                color: "#323232",
              }}
            >
              {moment(date, "x").format("HH:mm")}
            </p>
          </div>
        )}
        {isOpen && (
          <div style={{ padding: 12 }}>
            <Row>{props.children}</Row>
          </div>
        )}
      </Container>
    </Card>
  );
};

export default ExpansiveCard;
