import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GameBoardElement } from '../styled/components/GameBoard.styles';
import { GameCard } from './GameCard';
import MoonSvg from '../assets/moon.svg';
import StarSvg from '../assets/star.svg';
import SunSvg from '../assets/sun.svg';
import CometSvg from '../assets/comet.svg';
import CorrectSound from '../assets/correct.mp3';
import IncorrectSound from '../assets/incorrect.mp3';

const cardImages = [
  { src: MoonSvg, isMatched: false },
  { src: StarSvg, isMatched: false },
  { src: SunSvg, isMatched: false },
  { src: CometSvg, isMatched: false },
];

export const GameBoard = () => {

  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const navigate = useNavigate();

  const generateRandomOrder = () => {
    const randomOrder = [...cardImages, ...cardImages]
    randomOrder.sort(() => Math.random() - 0.5);

    const shuffleCards = randomOrder.map(cardImage => ({ ...cardImage, id: Math.random() * 999 }));
    setCards(shuffleCards);
  };

  const handleChoiceCard = (card) => {

    if(choiceOne && choiceTwo) return;

    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

  };

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const checkMatch = () => {
    if(choiceOne && choiceTwo) {

      if(choiceOne.src === choiceTwo.src) {
        
        const cardsMatched = cards.map(card => {
          if(card.src === choiceOne.src) {
            return { ...card, isMatched: true };
          } else {
            return card;
          };

        }); 

        const sound = new Audio(CorrectSound);
        sound.play();
        toast.success('Nice!');
        
        setCards(cardsMatched);
        setTimeout(() => resetChoices(), 1000);
        
      } else {
        const sound = new Audio(IncorrectSound);
        sound.play();
        toast.error('Sorry, but this is not a match');
        
        setTimeout(() => resetChoices(), 1000);
      }

    }
  };

  const checkAllMatches = () => {

    if(cards.length === 0) return; 

    const pendingMatches = cards.filter(card => !card.isMatched);

    if(pendingMatches.length === 0) {
      navigate('/game-over');
    }
  };
  
  useEffect(() => {
    generateRandomOrder();
  }, []);

  useEffect(() => {
    checkMatch();
    checkAllMatches();
  }, [choiceOne, choiceTwo]);

  return (
    <GameBoardElement>
      { cards.map(card => <GameCard card={card} key={card.id} handleChoiceCard={handleChoiceCard} flipped={card === choiceOne || card === choiceTwo || card.isMatched}/>) }
    </GameBoardElement>
  );
};