import React from "react";
import Community from "../assets/images/Community.svg";
import ProjectGraph from "../assets/images/ProjectGraph.svg";

export default function ProjectBreakdown() {
  return (
    <React.Fragment>
      <img className="BackgroundHeading" src={Community} alt="Community text" />
      <h2 className="h1 Section-heading">Our People, Our Work</h2>
      <div className="Grid">
        <div className="GridItem GridItem--third">
          <p className="Subtitle">
            Carrot cake sesame snaps marshmallow sugar plum cake. Gingerbread
            chocolate bar jujubes marshmallow marzipan cake chupa chups gummies.
            Gingerbread caramels gummi bears icing jelly beans gummi bears.
          </p>

          <p>
            Gummi bears toffee chupa chups jelly-o. Danish cupcake ice cream.
            Candy canes topping donut cake. Cake apple pie chupa chups bonbon
            chupa chups muffin.
          </p>

          <p>
            Apple pie lemon drops chocolate cake jelly pie ice cream gummi bears
            toffee wafer. Pastry marshmallow danish gummi bears bonbon cookie.
            Soufflé chocolate cake jelly sugar plum donut. Marzipan sweet roll
            gummies tart tiramisu oat cake powder sweet cupcake.
          </p>
        </div>
        <div className="GridItem GridItem--twoThirds">
          <img src={ProjectGraph} alt="Projects" />
        </div>
      </div>
    </React.Fragment>
  );
}
