import React from "react";
import Navigation from "./Navigation";
import ThankYou from "../assets/images/ThankYou.svg";

export default function ThankYouCover() {
  return (
    <section class="Cover">
      <header>
        <Navigation />
      </header>
      <div class="Cover-text">
        <img src={ThankYou} alt="Thank you" />
        <h2 class="Cover-subtitle">For a Wonderful First Year</h2>
      </div>
    </section>
  );
}
