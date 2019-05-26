import React from "react";
import Dev_TogetherLogoWhite from "../assets/images/Dev_TogetherLogoWhite.svg";

export default function Navigation() {
  return (
    <nav>
      <span className="Logo">
        <img src={Dev_TogetherLogoWhite} alt="Dev Together logo" />
      </span>
    </nav>
  );
}
