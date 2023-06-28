import { GameContainer, GameContent, GameBoard, GameCard, GameTime } from "../styled/screens/GameScreen.styles";
import { GameHeader } from "../components";
import MoonSvg from '../assets/moon.svg';
import StarSvg from '../assets/star.svg';
import SunSvg from '../assets/sun.svg';
import CometSvg from '../assets/comet.svg';

export const GameScreen = () => {
  return (
    <GameContainer>
        <GameHeader/>
        <GameContent>
            <GameTime>
                <h2>30</h2>
            </GameTime>
            <GameBoard>
                <GameCard>
                    <img src={MoonSvg} alt='Moon'/>
                </GameCard>
                <GameCard>
                    <img src={StarSvg} alt='Star'/>
                </GameCard>
                <GameCard>
                    <img src={SunSvg} alt='Sun'/>
                </GameCard>
                <GameCard>
                    <img src={CometSvg} alt='Comet'/>
                </GameCard>
                <GameCard>
                    <img src={MoonSvg} alt='Moon'/>
                </GameCard>
                <GameCard>
                    <img src={StarSvg} alt='Star'/>
                </GameCard>
                <GameCard>
                    <img src={SunSvg} alt='Sun'/>
                </GameCard>
                <GameCard>
                    <img src={CometSvg} alt='Comet'/>
                </GameCard>
            </GameBoard>
        </GameContent>
    </GameContainer>
  );
};