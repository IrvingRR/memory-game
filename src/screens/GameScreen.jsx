import { GameContainer, GameContent, GameTime } from "../styled/screens/GameScreen.styles";
import { GameHeader, GameBoard, GameTimer } from "../components";
import { useState } from "react";

export const GameScreen = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <GameContainer>
        <GameHeader/>
        <GameContent>
            <GameTime>
                <GameTimer isGameStarted={isGameStarted}/>
            </GameTime>
            <GameBoard/>
        </GameContent>
    </GameContainer>
  );
};