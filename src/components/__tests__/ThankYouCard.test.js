import React from "react";
import { shallow } from "enzyme";
import ThankYouCard, { CANVAS_CONFIG } from "../ThankYouCard";

let member = {
  name: "Test member 1",
  isMentor: true
};

let message = {
  text: "You're the best mentor, {NAME}!"
};

let backgroundImage = {
  file: {
    url: "http://testurl1.com"
  },
  maxTextWidth: 0.75,
  textPosition: "topLeft"
};

let subject;
let prevArrow = jest.fn();
let nextArrow = jest.fn();

describe("ThankYouCard", () => {
  beforeEach(() => {
    subject = shallow(
      <ThankYouCard
        member={member}
        message={message}
        backgroundImage={backgroundImage}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
      />
    );
  });

  describe("#render", () => {
    it("matches snapshot", () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe("#createImageForCanvas", () => {
    it("returns an instance of Image", () => {
      expect(subject.instance().createImageForCanvas()).toBeInstanceOf(Image);
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

  describe("#setImageSrc", () => {
    it("updates the src of the imageRef with the value from the prop", () => {
      subject.instance().setImageSrc();
      expect(subject.instance().imageRef.current.src).toEqual(
        expect.stringContaining(backgroundImage.file.url)
      );
    });
  });

  describe("#drawBackgroundImage", () => {
    it("draws an image on the canvas context", () => {
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

  describe("#drawText", () => {});

  describe("#getCanvasMessage", () => {
    describe("when the token {NAME} is present in the message text", () => {
      it("replaces the {NAME} token", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).not.toEqual(expect.stringContaining("{NAME}"));
        expect(actual).toEqual(expect.stringContaining(member.name));
      });
    });

    describe("when an apostrophe is present in the message text", () => {
      it("replaces any apostrophes with actual single quote", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).not.toEqual(expect.stringContaining("'"));
        expect(actual).toEqual(expect.stringContaining("’"));
      });
    });

    describe("when no reserved tokens are present in the message text", () => {
      beforeEach(() => {
        message = {
          text: "Thanks a bunch!"
        };

        subject = shallow(
          <ThankYouCard
            member={member}
            message={message}
            backgroundImage={backgroundImage}
            prevArrow={prevArrow}
            nextArrow={nextArrow}
          />
        );
      });
      it("returns the string as-is", () => {
        const actual = subject.instance().getCanvasMessage();
        expect(actual).toEqual(message.text);
      });
    });
  });

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

    describe("with a small screen width", () => {
      it("returns the correct config for small screens", () => {
        const width = Math.floor(Math.random() * CANVAS_CONFIG.breakPoint);
        const config = subject.instance().getTextStyleConfig(width);

        expect(config.fontSize).toEqual(CANVAS_CONFIG.smallFontSize);
        expect(config.horizontalSpacing).toEqual(CANVAS_CONFIG.smallSpacing);
        expect(config.verticalSpacing).toEqual(CANVAS_CONFIG.smallSpacing);
      });
    });

    describe("with a large screen width", () => {
      it("returns the correct config for small screens", () => {
        const width =
          Math.floor(Math.random() * (1600 - CANVAS_CONFIG.breakPoint)) +
          CANVAS_CONFIG.breakPoint;
        const config = subject.instance().getTextStyleConfig(width);

        expect(config.fontSize).toEqual(CANVAS_CONFIG.largeFontSize);
        expect(config.horizontalSpacing).toEqual(CANVAS_CONFIG.largeSpacing);
        expect(config.verticalSpacing).toEqual(CANVAS_CONFIG.largeSpacing);
      });
    });
  });

  describe("#calculateTextPosition", () => {
    let numOfLines = 4;
    let lineHeight = 58;
    let horizontalSpacing = 60;
    let verticalSpacing = 60;
    let height = 1000;
    let textPosition;

    describe("when text is placed topLeft", () => {
      describe("when it's the first of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              0,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(88);
        });
      });

      describe("when it's the second of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              1,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(146);
        });
      });

      describe("when it's the third of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              2,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(204);
        });
      });

      describe("when it's the fourth of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              3,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(262);
        });
      });
    });

    describe("when text is placed bottomLeft", () => {
      beforeEach(() => {
        backgroundImage = {
          file: {
            url: "http://testurl1.com"
          },
          maxTextWidth: 0.75,
          textPosition: "bottomLeft"
        };

        subject = shallow(
          <ThankYouCard
            member={member}
            message={message}
            backgroundImage={backgroundImage}
            prevArrow={prevArrow}
            nextArrow={nextArrow}
          />
        );
      });

      describe("when it's the first of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              0,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(766);
        });
      });

      describe("when it's the second of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              1,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(824);
        });
      });

      describe("when it's the third of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              2,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(882);
        });
      });

      describe("when it's the fourth of four lines", () => {
        it("returns the correct x and y coordinate to place the line of text", () => {
          textPosition = subject
            .instance()
            .calculateTextPosition(
              3,
              numOfLines,
              lineHeight,
              horizontalSpacing,
              verticalSpacing,
              height
            );
          expect(textPosition.left).toEqual(horizontalSpacing);
          expect(textPosition.top).toEqual(940);
        });
      });
    });
  });
});
