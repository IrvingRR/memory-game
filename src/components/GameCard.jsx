import { GameCardElement } from "../styled/components/GameCard.styles";

export const GameCard = ({ picture }) => {
  return (
    <GameCardElement>
        <img src={picture} alt={picture}/>
    </GameCardElement>
  );
};