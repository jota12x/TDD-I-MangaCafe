import React from "react";
import ReactDOM, { render } from "react-dom";
import CafeHeader from "./CafeHeader";

describe("Manga Cafe Application Header", () => {
  it("renders the Header Component", () => {
    const container = document.createElement("div");
    const cafeHeader = <CafeHeader />;
    ReactDOM.render(cafeHeader, container);
    const headerContainer = container.childNodes[0];
    expect(headerContainer.id).toMatch("header");
  });
  //how can we debug our tests? Visually?
  it("renders the Header text", () => {
    const container = document.createElement("div");
    const cafeHeader = <CafeHeader />;
    ReactDOM.render(cafeHeader, container);
    const headerContainer = container.childNodes[0].childNodes[1];
    expect(headerContainer.tagName).toMatch("H3");
  });
});
