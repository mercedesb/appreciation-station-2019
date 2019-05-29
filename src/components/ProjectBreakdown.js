import React from "react";
import Community from "../assets/images/Community.svg";
import ProjectGraph from "../assets/images/ProjectGraph.svg";

export default function ProjectBreakdown() {
  return (
    <section className="Section">
      <img className="BackgroundHeading" src={Community} alt="Community text" />
      <h2 className="h1 Section-heading">Our People, Our Work</h2>
      <div className="Grid">
        <div className="GridItem GridItem--third">
          <p className="Subtitle">
            We know that if you have written code, you are a real developer — no
            matter what language, how many lines, or for how long. And we're
            here to support you, no matter what framework or tools you prefer.
          </p>
          <p>
            As a polyglot community, we welcome projects of all types and sizes.
            In our first year, we pair programmed on 15 different languages and
            frameworks.
          </p>
          <p>
            Our mentors have a wide array of technical experiences and brought
            their knowledge of{" "}
            <strong>35 different languages and frameworks</strong> to the table
            for our mentees to learn from!
          </p>
          <p>
            So whether you're wanting to learn the latest and greatest
            Javascript framework or you want to hone your evergreen SQL skills,
            we've got you covered. Bring a project, get feedback, and pair
            program to level up your development skills.
          </p>
        </div>
        <div className="GridItem GridItem--twoThirds">
          <img src={ProjectGraph} alt="Projects" />
        </div>
      </div>
    </section>
  );
}
