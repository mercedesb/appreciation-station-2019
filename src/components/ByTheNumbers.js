import React from "react";

export default function ByTheNumbers() {
  const YELLOW = "#FFF7E4";
  const BLUE = "#EBF3FB";
  const RED = "#F7EAEA";
  const ORANGE = "#EBF3FB";
  const GREEN = "#a9dfce";

  const statistics = [
    {
      number: 19,
      text: "Events held across our Chicago and Madison chapters.",
      color: YELLOW
    },
    {
      number: 218,
      text: "Different people attended our Chicago events.",
      color: BLUE
    },
    {
      number: 74,
      text:
        "Projects reviewed and pair programmed on by our mentors and mentees.",
      color: RED
    },
    {
      number: 42,
      text: "Mentors attended our Chicago Code Review & Pairing events.",
      color: ORANGE
    },
    {
      number: 66,
      text: "Mentees attended our Chicago Code Review & Pairing events.",
      color: GREEN
    }
  ];

  const renderStatistic = (number, text, color) => {
    return (
      <div className="GridItem GridItem--third Statistic">
        <div className="Statistic-background">
          <svg x="0px" y="0px" viewBox="0 0 54 54">
            <circle
              fill={color}
              stroke={color}
              stroke-width="1"
              cx="27"
              cy="27"
              r="25"
              stroke-dasharray="157 157"
              stroke-dashoffset="157"
            />
          </svg>
        </div>
        <div className="Statistic-number">{number}</div>
        <p className="Statistic-text">{text}</p>
      </div>
    );
  };

  return (
    <div className="Grid StatisticsContainer">
      {statistics.map(stat =>
        renderStatistic(stat.number, stat.text, stat.color)
      )}
    </div>
  );
}
