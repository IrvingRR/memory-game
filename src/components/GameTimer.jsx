import { useState, useEffect, useRef } from 'react';
import TickingSound from '../assets/ticking.mp3';

export const GameTimer = ({ isGameStarted }) => {

    const [time, setTime] = useState(15);
    const audioRef = useRef();
    let timer;

    useEffect(() => {
        if(isGameStarted) {
            timer = setInterval(() => {
                if(time > 0) {
                    setTime(time - 1);
                }
            }, 1000);
    
            if(time <= 10) {
                audioRef.current.play();
            }
    
            return () => clearInterval(timer);
        }
    });

    return (
        <div>
            <h2>{time}</h2>
            <audio ref={audioRef} loop autoPlay>
                <source src={TickingSound} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        
    );
};
