import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TickingSound from '../assets/ticking.mp3';

/* 
    This component allows to render the timer which end with the game if the time end
    
    @param {Boolean} isGameStarted: Is the value that indicates that the game has started
    @param {Boolean} isSoundMuted: This value allows to play or pause the audio depending of the value
*/

export const GameTimer = ({ isGameStarted, isSoundMuted }) => {

    const [time, setTime] = useState(30);
    const audioRef = useRef();
    const navigate = useNavigate();
    let timer;

    // This effect start to decrease the time and play the audio when the timer value is equal or less than 10
    useEffect(() => {
        if(isGameStarted) {
            timer = setInterval(() => {
                if(time > 0) {
                    setTime(time - 1);
                }
            }, 1000);
    
            if(time <= 10) {
                if(!isSoundMuted) {
                    audioRef.current.play();
                } else {
                    audioRef.current.pause();
                }
            }
            
            if(time === 0) {
                audioRef.current.pause();
                navigate('/game-over/unsolved');
            }
    
            return () => clearInterval(timer);
        }
    });

    return (
        <div>
            <h2>{time}</h2>
            <audio ref={audioRef} loop>
                <source src={TickingSound} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        
    );
};
