import React from "react";
import ThankYouCover from "./components/ThankYouCover";
import ByTheNumbers from "./components/ByTheNumbers";
import AppreciationStation from "./components/AppreciationStation";
import ProjectBreakdown from "./components/ProjectBreakdown";
import ThankYouLetter from "./components/ThankYouLetter";
import SponsorShoutout from "./components/SponsorShoutout";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ThankYouCover />
      <ByTheNumbers />
      <AppreciationStation />
      <ProjectBreakdown />
      <ThankYouLetter />
      <SponsorShoutout />
      <Footer />
    </React.Fragment>
  );
}

export default App;
