import React from "react";
import ThankYouCover from "./components/ThankYouCover";
import ByTheNumbers from "./components/ByTheNumbers";
import ThankYouLetter from "./components/ThankYouLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ThankYouCover />
      <div className="Section">
        <ByTheNumbers />
      </div>
      <div className="Section">
        <ThankYouLetter />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
