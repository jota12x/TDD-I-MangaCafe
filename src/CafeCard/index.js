import React from 'react';
import {Card} from 'semantic-ui-react';
import CafeHeader from '../CafeHeader';
import CafeForm from '../CafeForm';
const CafeCard = () => (
  <Card style={{ width: "100%" }}>
    <Card.Content>
      <CafeHeader></CafeHeader>
      <CafeForm submitData={() => console.log("submit data")}></CafeForm>
    </Card.Content>
  </Card>
);

export default CafeCard;
