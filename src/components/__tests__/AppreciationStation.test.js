import React from "react";
import { shallow } from "enzyme";
import AppreciationStation from "../AppreciationStation";

describe("#render", () => {
  it("does not crash", () => {
    shallow(<AppreciationStation />);
  });
});
