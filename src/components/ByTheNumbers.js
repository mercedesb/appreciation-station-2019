import React from "react";

export default function ByTheNumbers() {
  const YELLOW = "#FFF7E4";
  const BLUE = "#EBF3FB";
  const RED = "#F7EAEA";
  const ORANGE = "#F7F3EF";
  const GREEN = "#E3F3F3";

  const statistics = [
    {
      number: 12,
      text: "Events held by our Chicago chapter.",
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
      <div className="GridItem GridItem--third Statistic" key={number}>
        <div className="Statistic-background">
          <svg x="0px" y="0px" viewBox="0 0 54 54">
            <circle
              fill={color}
              stroke={color}
              strokeWidth="1"
              cx="27"
              cy="27"
              r="25"
              strokeDasharray="157 157"
              strokeDashoffset="157"
            />
          </svg>
        </div>
        <div className="Statistic-number">{number}</div>
        <p className="Statistic-text">{text}</p>
      </div>
    );
  };

  return (
    <section className="Section">
      <div className="Grid StatisticsContainer">
        {statistics.map(stat =>
          renderStatistic(stat.number, stat.text, stat.color)
        )}
      </div>
    </section>
  );
}
