import React from "react";
import ReactDOM, { render } from "react-dom";
import CafeCard from "../CafeCard";

describe("Manga Cafe Application", () => {
  let container;
  let cardContainer;
  beforeEach(() => {
    container = document.createElement("div");
    ReactDOM.render(<CafeCard />, container);
    cardContainer = container.childNodes[0];
  });
  it("renders the main Card", () => {
    expect(cardContainer.className).toMatch("ui card");
  });
  it("renders the header inside the card", () => {
    const cardContent = cardContainer.childNodes[0];
    const headerContainer = cardContent.childNodes[0];
    expect(headerContainer.id).toMatch("header");
  });
  it("renders the form inside the card", () => {
    const cardContent = cardContainer.childNodes[0];
    const formContainer = cardContent.childNodes[1];
    expect(formContainer.tagName).toMatch("FORM");
    expect(formContainer.id).toMatch("CafeForm");
  });
});
