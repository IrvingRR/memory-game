import { useEffect, useState } from 'react';
import { GameBoardElement } from '../styled/components/GameBoard.styles';
import { GameCard } from './GameCard';
import MoonSvg from '../assets/moon.svg';
import StarSvg from '../assets/star.svg';
import SunSvg from '../assets/sun.svg';
import CometSvg from '../assets/comet.svg';

const cardImages = [
  { src: MoonSvg },
  { src: StarSvg },
  { src: SunSvg },
  { src: CometSvg },
];

export const GameBoard = () => {

  const [cards, setCards] = useState([]);

  const generateRandomOrder = () => {
    const randomOrder = [...cardImages, ...cardImages]
    randomOrder.sort(() => Math.random() - 0.5);

    const shuffleCards = randomOrder.map(cardImage => ({ ...cardImage, id: Math.random() * 999 }));
    setCards(shuffleCards);
  };

  useEffect(() => {
    generateRandomOrder();
  }, []);


  return (
    <GameBoardElement>
      { cards.map(card => <GameCard picture={card.src} key={card.id}/>) }
    </GameBoardElement>
  );
};