import React, { useEffect } from "react";
import { AppreciationStationConfig } from "../lib/data";

export default function ThankYouCard(props) {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    var img = new Image(); // Create new img element
    img.addEventListener(
      "load",
      function() {
        // get reference to canvas and context
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // set canvas size
        canvas.width = 800;
        canvas.height = 500;

        // draw background image
        context.drawImage(img, 0, 0, 800, 500);

        // draw green overlay
        var virtualCanvas = document.createElement("canvas");
        var virtualContext = virtualCanvas.getContext("2d");
        virtualContext.fillStyle = "rgba(25, 55, 46, .7)";
        virtualContext.fillRect(0, 0, 800, 500);
        context.drawImage(virtualCanvas, 0, 0, 800, 500);

        // draw text
        context.font = "48px Merriweather";
        context.fillStyle = "#ffffff";
        context.textAlign = "center";
        context.fillText(
          props.message.text.replace("{NAME}", props.member.name),
          canvas.width / 2,
          canvas.height / 2
        );
      },
      false
    );
    img.crossOrigin = "anonymous";
    img.src = `${props.backgroundImage.file.url}?w=800&h=500&fit=fill`; // Set source path
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
