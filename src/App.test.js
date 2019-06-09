import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* 
Commented out default test due to but in React <16.9. The big 
red warning is very distracting for the workshop.
Bug documented here:
https://github.com/testing-library/react-testing-library/issues/281
*/

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  return a + b;
}

describe("sum", () => {
  it("should add 2 positive numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it("should add 2 negative numbers", () => {
    expect(sum(-2, -3)).toEqual(-5);
  });

  it("should add 1 positive and 1 negative number", () => {
    expect(sum(-2, 3)).toEqual(1);
  });

  it("should add a number and 0", () => {
    expect(sum(2, 0)).toEqual(2);
  });

  it("should raise an error when trying to add something that's not a number", () => {
    expect(() => sum("0", 3)).toThrowError("Both arguments must be numbers");
  });
});
