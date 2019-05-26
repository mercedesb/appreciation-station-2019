import React from "react";
import ThankYouCover from "./components/ThankYouCover";
import ByTheNumbers from "./components/ByTheNumbers";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ThankYouCover />
      <div className="Section">
        <ByTheNumbers />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
