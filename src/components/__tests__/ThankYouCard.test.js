import React from "react";
import { shallow } from "enzyme";
import ThankYouCard from "../ThankYouCard";

let testMember = {
  name: "Test mentor",
  isMentor: true
};

let testMessage = {
  text: "Thank you for being a great mentor, {NAME}!",
  isMentor: true
};

let testBgdImage = {
  file: {
    url: "testUrl"
  },
  maxTextWidth: 0.75,
  textPosition: "topLeft"
};

let subject;
let renderPrevArrow = jest.fn();
let renderNextArrow = jest.fn();

function loadSubject(props = {}) {
  subject = shallow(
    <ThankYouCard
      member={testMember}
      message={testMessage}
      backgroundImage={testBgdImage}
      prevArrow={renderPrevArrow}
      nextArrow={renderNextArrow}
      {...props}
    />
  );
}

describe("ThankYouCard", () => {
  beforeEach(() => {
    loadSubject();
  });

  describe("#render", () => {
    it("matches snapshot", () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe("#setCanvasSize", () => {
    it("updates the canvas width and height", () => {
      let canvas = {};
      const width = 200;
      const height = 100;

      subject.instance().setCanvasSize(canvas, width, height);
      expect(canvas.width).toEqual(width);
      expect(canvas.height).toEqual(height);
    });
  });

  describe("#getCanvasMessage", () => {
    describe("when the token {NAME} is present in the message text", () => {
      beforeEach(() => {
        testMessage = {
          text: "Thank you for being a great mentor, {NAME}!",
          isMentor: true
        };

        loadSubject({ message: testMessage });
      });

      it("replaces the {NAME} token", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).not.toEqual(expect.stringContaining("{NAME}"));
        expect(actual).toEqual(expect.stringContaining(testMember.name));
      });
    });

    describe("when an apostrophe is present in the message text", () => {
      beforeEach(() => {
        testMessage = {
          text: "You're the best!",
          isMentor: true
        };

        loadSubject({ message: testMessage });
      });

      it("replaces any apostrophes with actual single quote", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).not.toEqual(expect.stringContaining("'"));
        expect(actual).toEqual(expect.stringContaining("’"));
      });
    });

    describe("when no reserved tokens are present in the message text", () => {
      beforeEach(() => {
        testMessage = {
          text: "Thanks a bunch!"
        };
        loadSubject({ message: testMessage });
      });

      it("returns the string as-is", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).toEqual(testMessage.text);
      });
    });
  });

  describe("Other example unit tests", () => {
    describe("#getTextStyleConfig", () => {
      it("returns an object with the correct shape", () => {
        const width = 200;
        const config = subject.instance().getTextStyleConfig(width);
        expect(config).toEqual(
          expect.objectContaining({
            fontSize: expect.any(Number),
            lineHeight: expect.any(Number),
            horizontalSpacing: expect.any(Number),
            verticalSpacing: expect.any(Number),
            maxWidth: expect.any(Number),
            font: expect.any(String),
            fillStyle: expect.any(String)
          })
        );
      });
    });

    // Using the `toBeInstanceOf()` Jest matcher
    describe("#createImageForCanvas", () => {
      it("returns an instance of Image", () => {
        expect(subject.instance().createImageForCanvas()).toBeInstanceOf(Image);
      });
    });

    // Using the `stringContaining()` Jest matcher
    describe("#setImageSrc", () => {
      it("updates the src of the imageRef with the value from the prop", () => {
        subject.instance().setImageSrc();
        expect(subject.instance().imageRef.current.src).toEqual(
          expect.stringContaining(testBgdImage.file.url)
        );
      });
    });

    // Using the `toHaveBeenCalledWith()` Jest matcher
    // This is not a great unit test because it is testing implementation details
    // It is provided as an example because there are times when this can be helpful.
    describe("#drawBackgroundImage", () => {
      it("draws an image on the canvas context", () => {
        // in order to test if a function has been called, it needs to be a Jest
        // mock function. Here is how you can mock out a function.
        let context = {
          drawImage: jest.fn()
        };
        const width = 200;
        const height = 100;

        subject.instance().drawBackgroundImage(context, width, height);

        expect(context.drawImage).toHaveBeenCalledWith(
          expect.any(Object),
          0,
          0,
          width,
          height
        );
      });
    });
  });
});
