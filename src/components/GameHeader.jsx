import { GameHeaderElement, GameLogo } from "../styled/components/GameHeade.styles";
import { IconButton } from "../common";
import LogoSvg from "../assets/logo.svg";
import SoundOffSvg from '../assets/sound--off.svg';

export const GameHeader = () => {
  return (
    <GameHeaderElement>
        <GameLogo>
            <img src={LogoSvg} alt='logo'/>
            <h2>Memory Game</h2>
        </GameLogo>
        <IconButton svg={SoundOffSvg}/>
    </GameHeaderElement>
  );
};