import React, { useState } from "react";
import ThankYouCard from "./ThankYouCard";
import PreviousNextArrow from "../assets/images/PreviousNextArrow.svg";

export default function AppreciationStation({ thankYous }) {
  const [searchName, setSearchName] = useState("");
  const [nameNotFound, setNameNotFound] = useState(false);
  const [
    currentVisibleThankYouIndex,
    setCurrentVisibleThankYouIndex
  ] = useState(0);

  function search(e) {
    e.preventDefault();

    const indexToBeVisible = thankYous.findIndex(ty =>
      ty.member.name.toLowerCase().includes(searchName.toLowerCase())
    );
    if (indexToBeVisible >= 0) {
      setCurrentVisibleThankYouIndex(indexToBeVisible);
    } else {
      setNameNotFound(true);
    }
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

  const shouldShowThankYouCard = thankYous && thankYous.length > 0;
  return (
    <React.Fragment>
      <div>
        <form onSubmit={search}>
          <label htmlFor="thankYouSearch">
            <span className="SearchInput-label">
              Search for someone you'd like to thank
            </span>
            <input
              type="text"
              className="SearchInput"
              id="thankYouSearch"
              placeholder="Search for name"
              onChange={e => setSearchName(e.target.value)}
            />
          </label>
          <button type="submit" className="SearchButton">
            Search
          </button>
        </form>
      </div>
      {nameNotFound && (
        <div className="Grid Grid--topSpacing Grid--noBottomSpacing">
          <div className="GridItem GridItem--full">
            <p>
              <strong>
                Whoops, looks like we don't know anyone with that name. Check
                your spelling and try again.
              </strong>
            </p>
          </div>
        </div>
      )}
      {shouldShowThankYouCard && (
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
    </React.Fragment>
  );
}
