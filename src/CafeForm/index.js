import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const CafeForm = ({ submitData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Form id="CafeForm" onSubmit={submitData}>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          name="First Name"
          value={firstName}
          onChange={(evt) => setFirstName(evt.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name="Last Name"
          value={lastName}
          onChange={(evt) => setLastName(evt.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          name="Phone Number"
          onChange={(evt) => setPhoneNumber(evt.target.value)}
        />
      </Form.Field>
      <Button
        type="submit"
        style={{ backgroundColor: "#E20212", color: "#fff" }}
      >
        Book Now
      </Button>
    </Form>
  );
};
export default CafeForm;
