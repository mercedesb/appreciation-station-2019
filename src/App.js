import React from "react";
import ThankYouCover from "./components/ThankYouCover";
import ByTheNumbers from "./components/ByTheNumbers";
import AppreciationStationContainer from "./components/AppreciationStationContainer";
import ProjectBreakdown from "./components/ProjectBreakdown";
import ThankYouLetter from "./components/ThankYouLetter";
import SponsorShoutout from "./components/SponsorShoutout";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ThankYouCover />
      <ByTheNumbers />
      <AppreciationStationContainer />
      <ProjectBreakdown />
      <ThankYouLetter />
      <SponsorShoutout />
      <Footer />
    </React.Fragment>
  );
}

export default App;
