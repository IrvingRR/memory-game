import { useState } from "react";
import { GameContainer, GameContent, GameTime, ActionsModal } from "../styled/screens/GameScreen.styles";
import { GameHeader, GameBoard, GameTimer, GameModal } from "../components";
import { Button, LinkButton } from '../common';
import { useModal } from "../hooks";

/* 
    This Screen allows to render all content when the user access to route with the path "/game"
    This screen render the game
*/

export const GameScreen = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const { isModalActivated, desactivateModal } = useModal(true);

  const handleStartGame = () => {
    desactivateModal();
    setIsGameStarted(true);
  };

  return (
    <GameContainer>
        <GameModal activated={isModalActivated}>
          <h2>Are you ready?</h2>
          <p>Find the 4 matches before the time end.</p>
          <ActionsModal>
            <Button onClick={handleStartGame}>Ready</Button>
            <LinkButton to='/' variant='secondary'>Cancel</LinkButton>
          </ActionsModal>
        </GameModal>
        { isGameStarted && 
          <>
            <GameHeader isGameStarted={isGameStarted}/>
            <GameContent>
              <GameTime>
                  <GameTimer isGameStarted={isGameStarted}/>
              </GameTime>
              <GameBoard/>
          </GameContent>
          </>
        }
    </GameContainer>
  );
};