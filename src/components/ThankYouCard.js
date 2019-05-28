import React, { useEffect } from "react";
import { AppreciationStationConfig } from "../lib/data";

export default function ThankYouCard(props) {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const imgWidth = 1200;
    const imgHeight = 675;

    function setImageProps(img, width, height) {
      const { url } = props.backgroundImage.file;
      img.crossOrigin = "anonymous";
      img.src = `${url}?w=${width}&h=${height}&fit=fill`;
    }

    function setCavasSize(canvas, width, height) {
      canvas.width = width;
      canvas.height = height;
    }

    function drawBackgroundImage(context, img, width, height) {
      context.drawImage(img, 0, 0, width, height);
    }

    function drawText(context) {
      const canvasMessage = props.message.text.replace(
        "{NAME}",
        props.member.name
      );

      const fontSize = 48;
      const lineSpacing = 10;
      const lineHeight = fontSize + lineSpacing;

      const baseSpacing = 20;
      const maxWidth = 700;

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
          topPosition = imgHeight - space;
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

    var img = new Image(); // Create new img element
    img.addEventListener(
      "load",
      function() {
        const canvas = canvasRef.current;
        setCavasSize(canvas, imgWidth, imgHeight);

        const context = canvas.getContext("2d");

        drawBackgroundImage(context, img, imgWidth, imgHeight);
        drawText(context);
      },
      false
    );
    setImageProps(img, imgWidth, imgHeight);
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
      <canvas ref={canvasRef} />
      <div>
        <span onClick={share}>Share</span>
      </div>
    </React.Fragment>
  );
}
