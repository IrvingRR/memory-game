import { useState } from "react";
import { GameCardElement, GameCardFront,GameCardBack } from "../styled/components/GameCard.styles";

export const GameCard = ({ card, flipped, handleChoiceCard }) => {

  // const [isFlipped, setIsFlipped] = useState(false);

  const handleClickBack = () => {
    // setIsFlipped(true);
    handleChoiceCard(card);
  };

  return (
    <GameCardElement>
        <GameCardFront flipped={flipped.toString()}>
          <img src={card.src}/>
        </GameCardFront>
        <GameCardBack onClick={handleClickBack} flipped={flipped.toString()}>
          <h2>?</h2>
        </GameCardBack>
    </GameCardElement>
  );
};