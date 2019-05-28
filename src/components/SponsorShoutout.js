import React from "react";
import Sponsors from "../assets/images/Sponsors.svg";
import AlphaParticleLogo from "../assets/images/sponsors/AlphaParticleLogo.svg";
import RedShelfLogo from "../assets/images/sponsors/RedShelfLogo.svg";
import TandemLogo from "../assets/images/sponsors/TandemLogo.svg";
import SitterCityLogo from "../assets/images/sponsors/SitterCityLogo.svg";
import UCXMarketLogo from "../assets/images/sponsors/UCXMarketLogo.svg";
import BreakFreeSolutionsLogo from "../assets/images/sponsors/BreakFreeSolutionsLogo.svg";
import CodingDojoLogo from "../assets/images/sponsors/CodingDojoLogo.svg";
import KennaSecurityLogo from "../assets/images/sponsors/KennaSecurityLogo.svg";
import ActiveCampaignLogo from "../assets/images/sponsors/ActiveCampaignLogo.svg";
import HomeChefLogo from "../assets/images/sponsors/HomeChefLogo.svg";
import CameoLogo from "../assets/images/sponsors/CameoLogo.svg";

export default function SponsorShoutout() {
  const sponsors = [
    {
      name: "Alpha Particle",
      isPremium: true,
      logo: AlphaParticleLogo
    },
    {
      name: "Red Shelf",
      isPremium: true,
      logo: RedShelfLogo
    },
    {
      name: "Tandem",
      isPremium: true,
      logo: TandemLogo
    },
    {
      name: "SitterCity",
      isPremium: false,
      logo: SitterCityLogo
    },
    {
      name: "UCX Market",
      isPremium: false,
      logo: UCXMarketLogo
    },
    {
      name: "BreakFree Solutions",
      isPremium: false,
      logo: BreakFreeSolutionsLogo
    },
    {
      name: "Coding Dojo",
      isPremium: false,
      logo: CodingDojoLogo
    },
    {
      name: "Kenna Security",
      isPremium: false,
      logo: KennaSecurityLogo
    },
    {
      name: "ActiveCampagin",
      isPremium: false,
      logo: ActiveCampaignLogo
    },
    {
      name: "HomeChef",
      isPremium: false,
      logo: HomeChefLogo
    },
    {
      name: "Cameo",
      isPremium: false,
      logo: CameoLogo
    }
  ];

  const renderSponsorLogo = (name, logo, isPremium) => {
    return (
      <div
        key={name}
        className={`GridItem Sponsor ${isPremium ? "Sponsor--premium" : ""}`}
      >
        <img src={logo} alt={name} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <img className="BackgroundHeading" src={Sponsors} alt="Sponsors text" />
      <h2 className="h1 Section-heading">Special Shoutout</h2>
      <div className="Grid Grid--topSpacing Grid--twelve">
        {sponsors.map(sponsor =>
          renderSponsorLogo(sponsor.name, sponsor.logo, sponsor.isPremium)
        )}
      </div>
    </React.Fragment>
  );
}
