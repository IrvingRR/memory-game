import { useState, useEffect, useRef } from 'react';
import { GameHeaderElement, GameLogo } from "../styled/components/GameHeader.styles";
import { IconButton } from "../common";
import LogoSvg from "../assets/logo.svg";
import SoundOnSvg from '../assets/sound--on.svg';
import SoundOffSvg from '../assets/sound--off.svg';
import BackgroundMusic from '../assets/background.mp3';

/* 
    This component allows to render the header of the game
    
    @param {Boolean} isGameStarted: Is the value that allows to indicate if the game already started
*/

export const GameHeader = ({ isGameStarted }) => {

  const [isMusicActivated, setIsMusicActivated] = useState(true);
  const audioRef = useRef();

  // This function is responsible for pausing the music when the button in the top right corner is clicked and the music is playing
  const handleStopMusic = () => {
    audioRef.current.pause();
    setIsMusicActivated(false);
  };

  // This function is responsible for playing the music when the button in the top right corner is clicked and the music is paused
  const handlePlayMusic = () => {
    audioRef.current.play();
    setIsMusicActivated(true);
  };

  // This function is responsible for execute the correct function depending if the music is playing or paused
  const handleMusic = () => {
    if(isMusicActivated) {
      handleStopMusic();
    } else {
      handlePlayMusic();
    }
  }

  // This effect is responsible for playing the background music when the game is started
  useEffect(() => {
    if(isGameStarted) {
      audioRef.current.play();
    }
  }, [isGameStarted]);

  return (
    <GameHeaderElement>
        <GameLogo to='/'>
            <img src={LogoSvg} alt='logo'/>
            <h2>Memory Game</h2>
        </GameLogo>
        <IconButton svg={isMusicActivated ? SoundOnSvg : SoundOffSvg} onClick={handleMusic}/>
        <audio ref={audioRef}>
            <source src={BackgroundMusic} type="audio/mp3"/>
            Your browser does not support the audio element.
        </audio>
    </GameHeaderElement>
  );
};