import { GameCardElement, GameCardFront,GameCardBack } from "../styled/components/GameCard.styles";

export const GameCard = ({ card, flipped, handleChoiceCard }) => {

  return (
    <GameCardElement>
        <GameCardFront flipped={flipped.toString()}>
          <img src={card.src}/>
        </GameCardFront>
        <GameCardBack onClick={() => handleChoiceCard(card)} flipped={flipped.toString()}>
          <h2>?</h2>
        </GameCardBack>
    </GameCardElement>
  );
};