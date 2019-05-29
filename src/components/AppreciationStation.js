import React, { useState, useEffect } from "react";
import { AppreciationStationConfig } from "../lib/data";
import ThankYouCard from "./ThankYouCard";
import WeDidIt from "../assets/images/WeDidIt.svg";
import PreviousNextArrow from "../assets/images/PreviousNextArrow.svg";

export default function AppreciationStation() {
  const [thankYous, setThankYous] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [
    currentVisibleThankYouIndex,
    setCurrentVisibleThankYouIndex
  ] = useState(0);

  useEffect(() => {
    function createThankYous(
      receivedImages,
      receivedMessages,
      receivedMembers
    ) {
      const mentorMessages = receivedMessages.filter(msg => msg.isMentor);
      const menteeMessages = receivedMessages.filter(msg => msg.isMentee);
      const speakerMessages = receivedMessages.filter(msg => msg.isSpeaker);

      return receivedMembers.map(member => {
        let messages;
        if (member.isMentor) messages = mentorMessages;
        if (member.isMentee) messages = menteeMessages;
        if (member.isSpeaker) messages = speakerMessages;

        return {
          member: member,
          backgroundImage: getRandom(receivedImages),
          message: getRandom(messages)
        };
      });
    }

    AppreciationStationConfig.getBackgroundImages().then(imagesResponse => {
      AppreciationStationConfig.getMemberMessages().then(messagesResponse => {
        AppreciationStationConfig.getMembers().then(membersResponse => {
          const localThankYous = createThankYous(
            imagesResponse,
            messagesResponse,
            membersResponse
          );
          shuffle(localThankYous, setThankYous);
        });
      });
    });
  }, []);

  // Fisher-Yates shuffle
  function shuffle(collection, collectionSetter) {
    let array = [...collection];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    collectionSetter(array);
  }

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function search(e) {
    e.preventDefault();

    const indexToBeVisible = thankYous.findIndex(ty =>
      ty.member.name.includes(searchName)
    );
    setCurrentVisibleThankYouIndex(indexToBeVisible);
  }

  function renderPrevArrow() {
    const isHiddenClassName =
      currentVisibleThankYouIndex <= 0 ? "is-hidden" : "";
    const className = `Prev is-clickable ${isHiddenClassName}`;

    return (
      <img
        src={PreviousNextArrow}
        className={className}
        onClick={() =>
          setCurrentVisibleThankYouIndex(currentVisibleThankYouIndex - 1)
        }
        alt="Go to previous thank you card"
      />
    );
  }

  function renderNextArrow() {
    const isHiddenClassName =
      currentVisibleThankYouIndex >= thankYous.length - 1 ? "is-hidden" : "";
    const className = `Next is-clickable ${isHiddenClassName}`;
    return (
      <img
        src={PreviousNextArrow}
        className={className}
        onClick={() =>
          setCurrentVisibleThankYouIndex(currentVisibleThankYouIndex + 1)
        }
        alt="Go to next thank you card"
      />
    );
  }

  return (
    <section className="Section">
      <img className="BackgroundHeading" src={WeDidIt} alt="We Did It text" />
      <h2 className="h1 Section-heading">Appreciation Station</h2>
      <div className="Grid Grid--smallerSpacing">
        <div className="GridItem GridItem--full">
          <p className="Subtitle">
            Did you have a great pairing experience and want to let your pair
            know you appreciate them? Did you have a great takeaway from one of
            lightning talks? Search for their name and send them a thank you
            note. We've had 42 different mentors, 66 different mentees, 16
            different speakers, and 11 different sponsors this year. That's a
            lot of people to thank!
          </p>
        </div>
      </div>
      <div>
        <form onSubmit={search}>
          <label htmlFor="thankYouSearch">
            <input
              type="text"
              className="SearchInput"
              placeholder="Search for someone you'd like to thank"
              onChange={e => setSearchName(e.target.value)}
            />
          </label>
          <button type="submit" className="SearchButton">
            Search
          </button>
        </form>
      </div>
      {thankYous && thankYous.length > 0 && (
        <ThankYouCard
          member={thankYous[currentVisibleThankYouIndex].member}
          message={thankYous[currentVisibleThankYouIndex].message}
          backgroundImage={
            thankYous[currentVisibleThankYouIndex].backgroundImage
          }
          prevArrow={renderPrevArrow}
          nextArrow={renderNextArrow}
        />
      )}
    </section>
  );
}
