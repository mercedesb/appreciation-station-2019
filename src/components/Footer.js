import React from "react";
import GetInvolved from "../assets/images/GetInvolved.svg";

export default function Footer() {
  const brandSiteUrl = "https://devtogether.co";

  return (
    <footer className="GlobalFooter">
      <section className="Section">
        <img
          className="BackgroundHeading"
          src={GetInvolved}
          alt="Get Involved text"
        />
        <h2 className="h1 Section-heading">Join Us!</h2>
        <div className="Grid Grid--noBorder">
          <div className="GridItem GridItem--full">
            <p className="Subtitle">
              Become a part of a growing community and continue to develop your
              technical and non-technical skills.
            </p>
            <div>
              <a
                className="Button Button--light"
                href={`${brandSiteUrl}/chapters`}
              >
                Find a Chapter
              </a>
            </div>
          </div>
        </div>
      </section>
      <ul>
        <li>
          <a href={`${brandSiteUrl}/approach/`}>Our Approach</a>
        </li>
        <li>
          <a href={`${brandSiteUrl}/chapters/`}>Chapters</a>
        </li>
        <li>
          <a href={`${brandSiteUrl}/sponsorship/`}>Sponsorship</a>
        </li>
        <li>
          <a href={`${brandSiteUrl}/blog/`}>Blog</a>
        </li>
        <li>
          <a href={`${brandSiteUrl}/code-of-conduct/`}>Code of Conduct</a>
        </li>
      </ul>
      <div className="Copyright">&copy; 2019 Dev Together</div>
    </footer>
  );
}
