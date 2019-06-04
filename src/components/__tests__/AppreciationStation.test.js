import React from "react";
import { shallow } from "enzyme";
import AppreciationStation from "../AppreciationStation";
import ThankYouCard from "../ThankYouCard";

const mockThankYous = [
  {
    member: {
      name: "Test member 1",
      isMentor: true
    },
    message: {
      text: "Thank you {NAME} for being a great mentor!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl1.com"
      }
    }
  },
  {
    member: {
      name: "Test member 2",
      isMentee: true
    },
    message: {
      text: "Thank you {NAME} for being a great mentee!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl2.com"
      }
    }
  },
  {
    member: {
      name: "Test member 3",
      isSpeaker: true
    },
    message: {
      text: "Thank you {NAME} for being a great speaker!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl3.com"
      }
    }
  },
  {
    member: {
      name: "Test member 4",
      isSponsor: true
    },
    message: {
      text: "Thank you {NAME} for being a great sponsor!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl4.com"
      }
    }
  }
];

let subject;

describe("AppreciationStation", () => {
  beforeEach(() => {
    subject = shallow(<AppreciationStation thankYous={mockThankYous} />);
  });

  describe("#render", () => {
    it("matches snapshot", () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe("#search", () => {
    describe("when name is not found", () => {
      it("renders a ThankYouCard component", () => {
        subject.find("form").simulate("submit", { preventDefault: jest.fn() });
        expect(subject).toMatchSnapshot();
        expect(subject.find("strong")).toHaveLength(1);
      });
    });
  });
});
