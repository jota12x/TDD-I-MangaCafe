import React from "react";
import "./App.css";
import { Container, Grid } from "semantic-ui-react";
import CafeCard from "./CafeCard";

function App() {
  return (
    <Container style={{ width: "100%" }}>
      <Grid centered padded columns={1}>
        <Grid.Row centered>
          <Grid.Column computer={6} tablet={6} widescreen={6}>
            <CafeCard></CafeCard>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
