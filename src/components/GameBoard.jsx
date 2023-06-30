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

/* 
    Component used to display the board of the game with every card
    this component does not receive any property
*/

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

  // This function is responsible for creating the random order of the cards
  const generateRandomOrder = () => {
    const randomOrder = [...cardImages, ...cardImages]
    randomOrder.sort(() => Math.random() - 0.5);

    const shuffleCards = randomOrder.map(cardImage => ({ ...cardImage, id: Math.random() * 999 }));
    setCards(shuffleCards);
  };

  // This function allow to modify the state choiceOne and choiceTwo when the user click a specific card
  const handleChoiceCard = (card) => {

    if(choiceOne && choiceTwo) return;

    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

  };

  // This function reset the previous value of the every choice
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // This function is responsible to check if the choiceOne and choiceTwo are equal and match
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
        toast.success('Nice!, it’s a match');
        
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

  // This function is responsible to check if all matches were found
  const checkAllMatches = () => {

    if(cards.length === 0) return; 

    const pendingMatches = cards.filter(card => !card.isMatched);

    if(pendingMatches.length === 0) {
      navigate('/game-over/resolved');
    }
  };
  
  // This effect execute thi generateRandomOrder function to create a new order when the component is rendered the first time
  useEffect(() => {
    generateRandomOrder();
  }, []);

  // This effect is responsible to check if the choices are match and if the all matches were found every time the choiceOne and choiceTwo changed
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