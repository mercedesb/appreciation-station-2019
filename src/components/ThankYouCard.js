import React, { Component } from "react";
import { AppreciationStationConfig } from "../lib/data";

const CANVAS_CONFIG = {
  breakPoint: 720,
  smallFontSize: 24,
  largeFontSize: 48,
  lineSpacing: 10,
  smallSpacing: 20,
  largeSpacing: 30
};

export default class ThankYouCard extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      img: null
    };
  }

  componentDidMount() {
    let img = this.createImageForCanvas();
    img.addEventListener("load", this.drawCanvas, false);
    window.addEventListener("resize", this.drawCanvas);
    this.setState({ img: img });
  }

  componentDidUpdate() {
    this.drawCanvas();
  }

  componentWillUnmount() {
    this.state.img.removeEventListener("load", this.drawCanvas);
    window.removeEventListener("resize", this.drawCanvas);
  }

  createImageForCanvas = () => {
    var img = new Image(); // Create new img element
    img.crossOrigin = "anonymous";
    img.src = this.props.backgroundImage.file.url;
    return img;
  };

  setCanvasSize = (canvas, width, height) => {
    canvas.width = width;
    canvas.height = height;
  };

  drawBackgroundImage = (context, img, width, height) => {
    context.drawImage(img, 0, 0, width, height);
  };

  drawText = (context, width, height) => {
    const canvasMessage = this.props.message.text.replace(
      "{NAME}",
      this.props.member.name
    );

    const fontSize =
      width < CANVAS_CONFIG.breakPoint
        ? CANVAS_CONFIG.smallFontSize
        : CANVAS_CONFIG.largeFontSize;

    const lineHeight = fontSize + CANVAS_CONFIG.lineSpacing;

    const baseSpacing =
      width < CANVAS_CONFIG.breakPoint
        ? CANVAS_CONFIG.smallSpacing
        : CANVAS_CONFIG.largeSpacing;

    const maxWidth = width * 0.75;

    context.font = `600 ${fontSize}px Merriweather`;
    context.fillStyle = "#ffffff";

    const lines = this.getLines(context, canvasMessage, maxWidth);
    lines.forEach((line, index) => {
      const position = this.calculateTextPosition(
        index,
        lines.length,
        lineHeight,
        baseSpacing,
        height
      );
      context.fillText(line, position.left, position.top, maxWidth);
    });
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
    baseSpacing,
    height
  ) => {
    if (this.props.backgroundImage.textPosition === "topLeft") {
      const multiplier = currentIndex + 1;
      const space = multiplier * lineHeight + baseSpacing;
      return {
        left: baseSpacing,
        top: space
      };
    } else if (this.props.backgroundImage.textPosition === "bottomLeft") {
      const multiplier = numOfLines - 1 - currentIndex;
      const space = multiplier * lineHeight + baseSpacing;

      return {
        left: baseSpacing,
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

    this.drawBackgroundImage(context, this.state.img, width, height);
    this.drawText(context, width, height);
  };

  share = () => {
    const canvas = this.canvasRef.current;
    const imgData = canvas.toDataURL("png");
    const fileName = `Thank you ${
      this.props.member.name
    }! - ${new Date().toISOString()}`;

    AppreciationStationConfig.uploadImage(imgData, fileName).then(asset => {
      const imageUrl = asset.file["en-US"].url;
      console.log(imageUrl);
      window.open(
        `https://twitter.com/intent/tweet?&amp;text=Thank you from Dev Together! \n\nhttp:${imageUrl}`,
        "_blank"
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="ThankYouCardContainer">
          <canvas ref={this.canvasRef} />
        </div>
        <div>
          <span onClick={this.share}>Share</span>
        </div>
      </React.Fragment>
    );
  }
}
