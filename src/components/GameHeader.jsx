import { useState, useEffect, useRef } from 'react';
import { GameHeaderElement, GameLogo } from "../styled/components/GameHeade.styles";
import { IconButton } from "../common";
import LogoSvg from "../assets/logo.svg";
import SoundOnSvg from '../assets/sound--on.svg';
import SoundOffSvg from '../assets/sound--off.svg';
import BackgroundMusic from '../assets/background.mp3';

export const GameHeader = ({ isGameStarted }) => {

  const [isMusicActivated, setIsMusicActivated] = useState(true);
  const audioRef = useRef();

  const handleStopMusic = () => {
    audioRef.current.pause();
    setIsMusicActivated(false);
  };

  const handlePlayMusic = () => {
    audioRef.current.play();
    setIsMusicActivated(true);
  };

  const handleMusic = () => {
    if(isMusicActivated) {
      handleStopMusic();
    } else {
      handlePlayMusic();
    }
  }

  useEffect(() => {
    if(isGameStarted) {
      audioRef.current.play();
    }
  }, [isGameStarted]);

  return (
    <GameHeaderElement>
        <GameLogo>
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