import React, { Component } from "react";

const CANVAS_CONFIG = {
  breakPoint: 720,
  smallFontSize: 24,
  largeFontSize: 48,
  lineSpacing: 10,
  smallSpacing: 20,
  largeSpacing: 60
};

export default class ThankYouCard extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.createImageForCanvas();
    this.setImageSrc();
    this.imageRef.current.addEventListener("load", this.drawCanvas, false);
    window.addEventListener("resize", this.drawCanvas);
  }

  componentDidUpdate() {
    this.setImageSrc();
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener("load", this.drawCanvas);
    window.removeEventListener("resize", this.drawCanvas);
  }

  createImageForCanvas = () => {
    var img = new Image();
    this.imageRef.current = img;
    img.crossOrigin = "anonymous";
    return img;
  };

  setCanvasSize = (canvas, width, height) => {
    canvas.width = width;
    canvas.height = height;
  };

  setImageSrc = () => {
    const img = this.imageRef.current;
    img.src = this.props.backgroundImage.file.url;
  };

  drawBackgroundImage = (context, width, height) => {
    const img = this.imageRef.current;
    context.drawImage(img, 0, 0, width, height);
  };

  drawText = (context, width, height) => {
    const canvasMessage = this.getCanvasMessage();
    const textStyle = this.getTextStyleConfig(width);

    context.font = textStyle.font;
    context.fillStyle = textStyle.fillStyle;

    const lines = this.getLines(context, canvasMessage, textStyle.maxWidth);
    lines.forEach((line, index) => {
      const position = this.calculateTextPosition(
        index,
        lines.length,
        textStyle.lineHeight,
        textStyle.horizontalSpacing,
        textStyle.verticalSpacing,
        height
      );
      context.fillText(line, position.left, position.top, textStyle.maxWidth);
    });
  };

  getCanvasMessage = () => {
    let canvasMessage = this.props.message.text.replace(
      "{NAME}",
      this.props.member.name
    );

    const singleQuote = String.fromCharCode(8217);

    canvasMessage = canvasMessage.replace("'", singleQuote);

    return canvasMessage;
  };

  getTextStyleConfig = width => {
    const fontSize =
      width < CANVAS_CONFIG.breakPoint
        ? CANVAS_CONFIG.smallFontSize
        : CANVAS_CONFIG.largeFontSize;

    const lineHeight = fontSize + CANVAS_CONFIG.lineSpacing;

    const horizontalSpacing =
      width < CANVAS_CONFIG.breakPoint
        ? CANVAS_CONFIG.smallSpacing
        : CANVAS_CONFIG.largeSpacing;

    const verticalSpacing =
      width < CANVAS_CONFIG.breakPoint
        ? CANVAS_CONFIG.smallSpacing
        : CANVAS_CONFIG.largeSpacing;

    const maxWidth = width * this.props.backgroundImage.maxTextWidth;

    const font = `600 ${fontSize}px Merriweather`;
    const fillStyle = "#ffffff";

    return {
      fontSize,
      lineHeight,
      horizontalSpacing,
      verticalSpacing,
      maxWidth,
      font,
      fillStyle
    };
  };

  getLines = (context, text, maxWidth) => {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var width = context.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  calculateTextPosition = (
    currentIndex,
    numOfLines,
    lineHeight,
    horizontalSpacing,
    verticalSpacing,
    height
  ) => {
    if (this.props.backgroundImage.textPosition === "topLeft") {
      const multiplier = currentIndex + 1;
      const space = multiplier * lineHeight + verticalSpacing / 2;
      return {
        left: horizontalSpacing,
        top: space
      };
    } else if (this.props.backgroundImage.textPosition === "bottomLeft") {
      const multiplier = numOfLines - 1 - currentIndex;
      const space = multiplier * lineHeight + verticalSpacing;

      return {
        left: horizontalSpacing,
        top: height - space
      };
    }
  };

  drawCanvas = () => {
    const canvas = this.canvasRef.current;
    const container = canvas.parentNode;
    const width = container.offsetWidth;
    const height = width * (9 / 16); // maintain 16:9 aspect ratio

    this.setCanvasSize(canvas, width, height);

    const context = canvas.getContext("2d");

    this.drawBackgroundImage(context, width, height);
    this.drawText(context, width, height);
  };

  download = e => {
    const canvas = this.canvasRef.current;
    const imgData = canvas.toDataURL("png");
    e.target.href = imgData;
  };

  render() {
    return (
      <React.Fragment>
        <div className="ThankYouCardContainer">
          {this.props.prevArrow()}
          <div className="ThankYouCard">
            <canvas ref={this.canvasRef} />
          </div>
          {this.props.nextArrow()}
        </div>
        <div>
          <a
            className="Share Button"
            href="#"
            onClick={this.download}
            download={`Thank you ${
              this.props.member.name
            }! - ${new Date().toISOString()}.png`}
          >
            Download
          </a>
        </div>
      </React.Fragment>
    );
  }
}
