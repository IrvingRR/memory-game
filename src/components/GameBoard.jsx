import { GameBoardElement } from '../styled/components/GameBoard.styles';
import { GameCard } from './GameCard';
import MoonSvg from '../assets/moon.svg';
import StarSvg from '../assets/star.svg';
import SunSvg from '../assets/sun.svg';
import CometSvg from '../assets/comet.svg';

export const GameBoard = () => {
  return (
    <GameBoardElement>
        <GameCard picture={MoonSvg}/>
        <GameCard picture={StarSvg}/>
        <GameCard picture={SunSvg}/>
        <GameCard picture={CometSvg}/>
        <GameCard picture={MoonSvg}/>
        <GameCard picture={StarSvg}/>
        <GameCard picture={SunSvg}/>
        <GameCard picture={CometSvg}/>
    </GameBoardElement>
  );
};