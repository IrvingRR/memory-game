import { GameContainer, GameContent, GameTime } from "../styled/screens/GameScreen.styles";
import { GameHeader, GameBoard } from "../components";

export const GameScreen = () => {
  return (
    <GameContainer>
        <GameHeader/>
        <GameContent>
            <GameTime>
                <h2>30</h2>
            </GameTime>
            <GameBoard/>
        </GameContent>
    </GameContainer>
  );
};