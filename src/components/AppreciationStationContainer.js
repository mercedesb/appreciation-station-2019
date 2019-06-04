import React, { useState, useEffect } from "react";
import { AppreciationStationConfig } from "../lib/data";
import AppreciationStation from "./AppreciationStation";
import WeDidIt from "../assets/images/WeDidIt.svg";

export default function AppreciationStationContainer() {
  const [thankYous, setThankYous] = useState([]);

  useEffect(() => {
    function createThankYous(
      receivedImages,
      receivedMessages,
      receivedMembers
    ) {
      const mentorMessages = receivedMessages.filter(msg => msg.isMentor);
      const menteeMessages = receivedMessages.filter(msg => msg.isMentee);
      const speakerMessages = receivedMessages.filter(msg => msg.isSpeaker);
      const sponsorMessages = receivedMessages.filter(msg => msg.isSponsor);

      return receivedMembers.map(member => {
        let messages;
        if (member.isMentor) messages = mentorMessages;
        if (member.isMentee) messages = menteeMessages;
        if (member.isSpeaker) messages = speakerMessages;
        if (member.isSponsor) messages = sponsorMessages;

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
    let shuffleArray = [...collection];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]]; // swap elements
    }
    collectionSetter(shuffleArray);
  }

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <section className="Section">
      <img
        className="BackgroundHeading BackgroundHeading--extraSpacing"
        src={WeDidIt}
        alt="We Did It text"
      />
      <h2 className="h1 Section-heading">Appreciation Station</h2>
      <div className="Grid Grid--noBottomSpacing">
        <div className="GridItem GridItem--full">
          <p className="Subtitle">
            Did you have a great pairing experience and want to let your pair
            know you appreciate them? Did you have a great takeaway from one of
            our lightning talks? Search for their name and send them a thank you
            note. We've had 42 different mentors, 66 different mentees, 16
            different speakers, and 11 different sponsors this year. That's a
            lot of people to thank!
          </p>
        </div>
      </div>
      <AppreciationStation thankYous={thankYous} />
    </section>
  );
}
