import { useEffect, useRef } from 'react';
import { GameHeaderElement, GameLogo } from "../styled/components/GameHeader.styles";
import { IconButton } from "../common";
import LogoSvg from "../assets/logo.svg";
import SoundOnSvg from '../assets/sound--on.svg';
import SoundOffSvg from '../assets/sound--off.svg';
import BackgroundMusic from '../assets/background.mp3';

/* 
    This component allows to render the header of the game
    
    @param {Boolean} isGameStarted: Is the value that allows to indicate if the game already started
    @param {Boolean} isSoundMuted: This value allows to play or pause the audio depending of the value
    @param {Function} handleMutedAndUnmutedSound: This function allow to change the value of isSoundMuted state to play or pause the audio
*/

export const GameHeader = ({ isGameStarted, isSoundMuted, handleMuteAndUnmounteSound }) => {

  const audioRef = useRef();

  // This effect is responsible for playing the background music when the game is started
  useEffect(() => {
    if(isGameStarted) {
      if(!isSoundMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isGameStarted, isSoundMuted]);

  return (
    <GameHeaderElement>
        <GameLogo to='/'>
            <img src={LogoSvg} alt='logo'/>
            <h2>Memory Game</h2>
        </GameLogo>
        <IconButton svg={isSoundMuted ? SoundOffSvg : SoundOnSvg} onClick={handleMuteAndUnmounteSound}/>
        <audio ref={audioRef}>
            <source src={BackgroundMusic} type="audio/mp3"/>
            Your browser does not support the audio element.
        </audio>
    </GameHeaderElement>
  );
};