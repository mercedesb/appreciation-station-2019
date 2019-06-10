import React from "react";
import ShortNote from "../assets/images/ShortNote.svg";
import ConfettiBall from "../assets/images/ConfettiBall.svg";

export default function ThankYouLetter() {
  return (
    <section className="Section">
      <img
        className="BackgroundHeading"
        src={ShortNote}
        alt="Short Note text"
      />
      <h2 className="h1 Section-heading">Thank you</h2>
      <div className="Grid Grid--small Grid--smallerSpacing">
        <div className="GridItem GridItem--full">
          <p className="Subtitle">
            What started as a little "what if..." has quickly grown to a
            community of hundreds of passionate people learning together and
            supporting each other.
          </p>
          <p>
            The idea for Dev Together came while reviewing applications for my
            company's apprenticeship program and realizing that there is a
            tremendous need for continued support and learning while trying to
            land your first dev job. I mentioned the idea in Slack and was
            instantly met with an enthusiasm I was not prepared for. This
            enthusiasm has come to define our first year of Dev Together. This
            community has become what it is because of all of you, your
            enthusiasm for learning, and your commitment to each other. I'm
            honestly blown away every month by what you all accomplish.
          </p>
          <p>
            Over this past year, I've seen some really incredible pairing
            sessions, overheard conversations about interview tips and
            negotiating job offers, and I've received some amazing messages from
            those of you who have landed your first dev job and officially get
            to put "Software Developer" on your LinkedIn.{" "}
            <span role="img" aria-label="raised hands emoji">
              🙌
            </span>{" "}
            Thank you for letting us all share in these achievements.
          </p>
          <p>
            Our community is made special by each and every person who attends
            our events. But I want to take the opportunity to shoutout some
            people who have gone above and beyond to help Dev Together get to
            where it is today.
          </p>
          <ul>
            <li>
              Andy Lester and Jeanna Clark - thank you for the brainstorming and
              support during our inception
            </li>
            <li>
              Cristina Ruth - thank you for sharing this vision and running
              things in Madison
            </li>
            <li>
              Doug Bell, Keanan Koppenhaver, Anish Krishnan, and Mat Biscan -
              thank you for being always willing to lend a hand wherever its
              needed
            </li>
            <li>
              Mina Slater - thank you for listening and vetting all of my
              ridiculous ideas
            </li>
            <li>
              Alé Salinas - thank you for your amazing design work and all of
              the time and effort you put into our community
            </li>
            <li>
              Chris Cortez - thank you for your photography skills and
              volunteering your time with us
            </li>
          </ul>
          <p>
            This past year has been nothing short of amazing, and I am so
            excited for what the next year holds. I want to continue to grow our
            community so we can support even more early-career devs through our
            Code Review & Pairing events as well as workshops. And I want to
            amplify more of the voices within our community. Be on the lookout
            for guest blogging, roundtable discussions, and more
            speaking/workshop opportunities from Dev Together this year.
          </p>
          <p>
            Thank you again for joining our community. We're so happy you're
            here{" "}
            <span role="img" aria-label="hugging face emoji">
              🤗
            </span>{" "}
          </p>
          <p>Looking forward,</p>
          <p>
            <strong>Mercedes Bernard</strong>
            <br />
            Founder
          </p>
        </div>
      </div>
      <img src={ConfettiBall} alt="Decorative confetti" className="Confetti" />
    </section>
  );
}
