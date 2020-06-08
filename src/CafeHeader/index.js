import React from "react";
import CafeLogo from "./cafe_logo.png";
import { Container, Header, Image } from "semantic-ui-react";
const CafeHeader = () => (
  <Container
    id="header"
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <Image src={CafeLogo} width="150"></Image>
    <Header as="h3" style={{ fontFamily: "inter" }}>
      Welcome to the Sun * Manga Reservation
    </Header>
  </Container>
);

export default CafeHeader;
