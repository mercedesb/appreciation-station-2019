import React from "react";
import Navigation from "./Navigation";
import ThankYou from "../assets/images/ThankYou.svg";

export default function ThankYouCover() {
  return (
    <section className="Cover Cover--animating">
      <header>
        <Navigation />
      </header>
      <div className="Cover-text">
        <img src={ThankYou} alt="Thank you" />
        <h1 className="Cover-title">Thank You!</h1>
        <h2 className="Cover-subtitle">For a Wonderful First Year</h2>
      </div>
    </section>
  );
}
