import React from "react";
import ShortNote from "../assets/images/ShortNote.svg";
import ConfettiBall from "../assets/images/ConfettiBall.svg";

export default function ThankYouLetter() {
  return (
    <React.Fragment>
      <img
        className="BackgroundHeading"
        src={ShortNote}
        alt="Short Note text"
      />
      <h2 className="h1 Section-heading">Thank you</h2>
      <div className="Grid Grid--small">
        <div className="GridItem GridItem--full">
          <p className="Subtitle">
            Cheesecake bear claw muffin muffin I love pudding. Chocolate cake
            candy canes oat cake cupcake powder. Tiramisu jujubes sweet roll
            cake cheesecake bonbon icing caramels tootsie roll. Candy sweet roll
            cotton candy cake. Jelly beans gingerbread apple pie candy sugar
            plum carrot cake donut chupa chups. Cupcake chupa chups powder.
            Gummies cookie gummies pie jelly-o.
          </p>
          <p>
            Sesame snaps macaroon biscuit carrot cake chocolate bar caramels ice
            cream. I love pie brownie dragée halvah dragée. I love caramels
            soufflé dragée marzipan cake wafer jujubes. Lemon drops dessert
            dessert apple pie wafer wafer. Toffee powder tart chupa chups bear
            claw pastry soufflé. Macaroon cupcake I love tiramisu powder I love
            chocolate caramels. Cake I love dragée ice cream jujubes lemon
            drops.
          </p>
          <p>
            Chocolate bar sugar plum chocolate cake halvah brownie icing. Jelly
            halvah I love liquorice jelly beans. Cupcake apple pie wafer
            croissant. Chupa chups dessert bear claw wafer cheesecake. Wafer ice
            cream carrot cake. Bear claw pudding gingerbread cotton candy sugar
            plum I love oat cake I love I love. Marshmallow cake soufflé.
            Chocolate cake caramels candy gingerbread.
          </p>
          <p>
            Oat cake ice cream pie biscuit marzipan tootsie roll jelly-o
            chocolate cake I love. Gummi bears fruitcake jelly wafer. Apple pie
            sugar plum fruitcake jelly. Gummi bears marzipan muffin. Pudding
            gummies sugar plum. Chocolate cake wafer pie. Sesame snaps biscuit
            soufflé caramels soufflé jelly-o bear claw liquorice. Soufflé
            macaroon pudding biscuit. Icing gummies croissant icing jujubes tart
            lollipop pie. Sugar plum muffin jelly sesame snaps sesame snaps I
            love tart cookie.
          </p>
          <p>
            Lollipop candy cookie ice cream. Wafer donut toffee. Pudding jelly
            powder I love sweet roll. Liquorice chupa chups wafer chocolate cake
            muffin lollipop. Gummi bears soufflé toffee soufflé. Tart jujubes
            fruitcake pudding. Chocolate bar oat cake danish cake jujubes
            macaroon I love gingerbread. Lollipop soufflé halvah I love
            marshmallow apple pie.
          </p>
        </div>
      </div>
      <img
        src={ConfettiBall}
        alt="Decorative confetti"
        className="Confetti Confetti--large Confetti--one"
      />
      <img
        src={ConfettiBall}
        alt="Decorative confetti"
        className="Confetti Confetti--small Confetti--two"
      />
      <img
        src={ConfettiBall}
        alt="Decorative confetti"
        className="Confetti Confetti--large Confetti--three"
      />
      <img
        src={ConfettiBall}
        alt="Decorative confetti"
        className="Confetti Confetti--med Confetti--four"
      />
    </React.Fragment>
  );
}
