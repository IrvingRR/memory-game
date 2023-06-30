import { GameCardElement, GameCardFront,GameCardBack } from "../styled/components/GameCard.styles";

/* 
    This component allows to render every card in the game board
    
    @param {Object} card: Is the object with the values of the card (src, id, isMatched)
    @param {Boolean} flipped: Is the property that allows to indicate if the card was chosen and has to be flipped 
    @param {Function} handleChoiceCard: Is function received from parent component (GameBoard) to choice thi current card clicked
*/

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