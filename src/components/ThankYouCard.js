import React, { useEffect } from "react";
import { AppreciationStationConfig } from "../lib/data";

export default function ThankYouCard(props) {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    function createImageForCanvas() {
      var img = new Image(); // Create new img element
      img.crossOrigin = "anonymous";
      img.src = props.backgroundImage.file.url;
      return img;
    }

    function setCanvasSize(canvas, width, height) {
      canvas.width = width;
      canvas.height = height;
    }

    function drawBackgroundImage(context, img, width, height) {
      context.drawImage(img, 0, 0, width, height);
    }

    function drawText(context, width, height) {
      const canvasMessage = props.message.text.replace(
        "{NAME}",
        props.member.name
      );

      const breakPoint = 720;
      const smallFontSize = 24;
      const largeFontSize = 48;
      const fontSize = width < breakPoint ? smallFontSize : largeFontSize;
      const lineSpacing = 10;
      const lineHeight = fontSize + lineSpacing;

      const baseSpacing = width < breakPoint ? 20 : 30;
      const maxWidth = width * 0.75;

      context.font = `600 ${fontSize}px Merriweather`;
      context.fillStyle = "#ffffff";

      let leftPosition, topPosition;

      const lines = getLines(context, canvasMessage, maxWidth);
      lines.forEach((line, index) => {
        if (props.backgroundImage.textPosition === "topLeft") {
          const multiplier = index + 1;
          const space = multiplier * lineHeight + baseSpacing;

          leftPosition = baseSpacing;
          topPosition = space;
        } else if (props.backgroundImage.textPosition === "bottomLeft") {
          const multiplier = lines.length - 1 - index;
          const space = multiplier * lineHeight + baseSpacing;

          leftPosition = baseSpacing;
          topPosition = height - space;
        }

        context.fillText(line, leftPosition, topPosition, maxWidth);
      });
    }

    function getLines(context, text, maxWidth) {
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
    }

    function drawCanvas(img) {
      const canvas = canvasRef.current;
      const container = canvas.parentNode;
      const width = container.offsetWidth;
      const height = width * (9 / 16); // maintain 16:9 aspect ratio

      setCanvasSize(canvas, width, height);

      const context = canvas.getContext("2d");

      drawBackgroundImage(context, img, width, height);
      drawText(context, width, height);
    }

    let img = createImageForCanvas();
    img.addEventListener("load", () => drawCanvas(img), false);
    window.addEventListener("resize", () => drawCanvas(img));
  });

  const share = () => {
    const canvas = canvasRef.current;
    const imgData = canvas.toDataURL("png");
    const fileName = `Thank you ${
      props.member.name
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

  return (
    <React.Fragment>
      <div className="ThankYouCardContainer">
        <canvas ref={canvasRef} />
      </div>
      <div>
        <span onClick={share}>Share</span>
      </div>
    </React.Fragment>
  );
}
