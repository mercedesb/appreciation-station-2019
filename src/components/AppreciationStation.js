import React, { useState, useEffect } from "react";
import WeDidIt from "../assets/images/WeDidIt.svg";

export default function AppreciationStation() {
  useEffect(() => {});

  return (
    <React.Fragment>
      <img className="BackgroundHeading" src={WeDidIt} alt="We Did It text" />
      <h2 className="h1 Section-heading">Appreciation Station</h2>
      <div className="Grid Grid--topSpacing" />
    </React.Fragment>
  );
}
