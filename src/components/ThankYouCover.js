import React from "react";
import Navigation from "./Navigation";
import ThankYou from "../assets/images/ThankYou.svg";

export default function ThankYouCover() {
  return (
    <section className="Cover">
      <header>
        <Navigation />
      </header>
      <div className="Cover-text">
        <img src={ThankYou} alt="Thank you" />
        <h2 className="Cover-subtitle">For a Wonderful First Year</h2>
      </div>
    </section>
  );
}
