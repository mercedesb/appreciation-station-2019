import React from "react";
import ThankYouCover from "./components/ThankYouCover";
import ByTheNumbers from "./components/ByTheNumbers";
import ThankYouLetter from "./components/ThankYouLetter";
import SponsorShoutout from "./components/SponsorShoutout";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ThankYouCover />
      <section className="Section">
        <ByTheNumbers />
      </section>
      <section className="Section">
        <ThankYouLetter />
      </section>
      <section className="Section">
        <SponsorShoutout />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
