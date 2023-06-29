import { GameContainer, GameContent, GameTime, ActionsModal } from "../styled/screens/GameScreen.styles";
import { GameHeader, GameBoard, GameTimer, GameModal } from "../components";
import { Button, LinkButton } from '../common';
import { useState } from "react";

export const GameScreen = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalActivated, setIsModalActivated] = useState(true);

  const handleStartGame = () => {
    setIsModalActivated(false);
    setIsGameStarted(true);
  };

  return (
    <GameContainer>
        <GameModal activated={isModalActivated}>
          <h2>Are you ready?</h2>
          <ActionsModal>
            <Button onClick={handleStartGame}>Ready</Button>
            <LinkButton to='/' variant='secondary'>Cancel</LinkButton>
          </ActionsModal>
        </GameModal>
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