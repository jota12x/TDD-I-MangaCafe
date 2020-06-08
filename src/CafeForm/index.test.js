import CafeForm from "../CafeForm";
import React from "react";
import ReactDOM, { render } from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
describe("Renders Manga Cafe Application Form", () => {
  let container;
  let form;
  let formContainer;
  beforeEach(() => {
    container = document.createElement("div");
    form = (
      <CafeForm
        submitData={() => {
          formContainer = container.childNodes[0];
          const firstNameInput = formContainer.childNodes[0].childNodes[1];
          const lastNameInput = formContainer.childNodes[1].childNodes[1];
          const phoneInput = formContainer.childNodes[2].childNodes[1]; 
          expect(firstNameInput.value).not.toBe('');
          expect(lastNameInput.value).not.toBe('');
          expect(phoneInput.value).not.toBe('');
        }}
      />
    );
    ReactDOM.render(form, container);
    formContainer = container.childNodes[0];
  });
  it("renders the form", () => {
    expect(formContainer.tagName).toMatch("FORM");
    expect(formContainer.id).toMatch("CafeForm");
  });
  it("renders the form field - First Name", () => {
    const inputContainer = formContainer.childNodes[0].childNodes;
    //label and input one after the other..
    const label = inputContainer[0];
    expect(label.tagName).toMatch("LABEL");
    expect(label.textContent).toMatch("First Name");
    const input = inputContainer[1];
    expect(input.tagName).toMatch("INPUT");
    expect(input.name).toMatch("First Name");
  });
  it("renders the form field - Last Name", () => {
    const inputContainer = formContainer.childNodes[1].childNodes;
    //label and input one after the other..
    const label = inputContainer[0];
    expect(label.tagName).toMatch("LABEL");
    expect(label.textContent).toMatch("Last Name");
    const input = inputContainer[1];
    expect(input.tagName).toMatch("INPUT");
    expect(input.name).toMatch("Last Name");
  });
  it("renders the form field - Phone Number", () => {
    const inputContainer = formContainer.childNodes[2].childNodes;
    //label and input one after the other..
    const label = inputContainer[0];
    expect(label.tagName).toMatch("LABEL");
    expect(label.textContent).toMatch("Phone Number");
    const input = inputContainer[1];
    expect(input.tagName).toMatch("INPUT");
    expect(input.name).toMatch("Phone Number");
  });
  it("renders the form Button", () => {
    const buttonElement = formContainer.childNodes[3];
    //label and input one after the other..
    expect(buttonElement.tagName).toMatch("BUTTON");
    expect(buttonElement.textContent).toMatch("Book Now");
  });

  it("submits data only when the three form fields are filled ", async () => {
      expect.hasAssertions();
      await ReactTestUtils.Simulate.submit(formContainer);
  });
});
