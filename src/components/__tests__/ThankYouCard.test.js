import React from "react";
import { shallow } from "enzyme";
import ThankYouCard from "../ThankYouCard";

let testMember = {
  name: "Test mentor",
  isMentor: true
};

let testMessage = {
  text: "Thank you for being a great mentor, {NAME}!",
  isMentor: true
};

let testBgdImage = {
  file: {
    url: "testUrl"
  },
  maxTextWidth: 0.75,
  textPosition: "topLeft"
};

let subject;
let renderPrevArrow = jest.fn();
let renderNextArrow = jest.fn();