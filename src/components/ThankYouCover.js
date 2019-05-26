import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ThankYou from "../assets/images/ThankYou.svg";

export default function ThankYouCover() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    function animate() {
      if (window.scrollY === 0) {
        setShouldAnimate(false);
      } else {
        setShouldAnimate(true);
      }
    }

    window.addEventListener("scroll", animate);

    // return cleanup function
    return () => {
      window.removeEventListener("scroll", animate);
    };
  }, []);

  return (
    <section className={`Cover ${shouldAnimate ? "Cover--animating" : ""}`}>
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
