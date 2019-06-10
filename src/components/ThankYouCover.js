import React, { useState } from "react";
import Navigation from "./Navigation";
import ThankYou from "../assets/images/ThankYou.svg";

export default function ThankYouCover() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const containerClass = `Cover ${shouldAnimate ? "Cover--animating" : ""}`;

  return (
    <section className={containerClass}>
      <header>
        <Navigation />
      </header>
      <div className="Cover-text">
        <img src={ThankYou} alt="Thank you" />
        <h1 className="Cover-title">Thank You!</h1>
        <h2 className="Cover-subtitle">For a Wonderful First Year</h2>
      </div>
      {shouldAnimate && (
        <button
          className="Pause Button Button--secondary"
          onClick={() => setShouldAnimate(false)}
        >
          Pause animation
        </button>
      )}
      {!shouldAnimate && (
        <button
          className="Pause Button Button--secondary"
          onClick={() => setShouldAnimate(true)}
        >
          Resume animation
        </button>
      )}
    </section>
  );
}
