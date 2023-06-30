import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "../styled/screens/GameOverScreen.styles";
import { GameResolved, GameUnsolved } from "../components";
import { LinkButton } from "../common";

/* 
    This Screen allows to render all content when the user access to route with the path "/game-over/:state"
    This screen allows to render the game over screen
*/

export const GameOverScreen = () => {

    const { state } = useParams();
    const navigate = useNavigate();

    // This effect check if the state parameter is invalid or not. If invalis then the user will be redirect to home screen
    useEffect(() => {
        if(state !== 'resolved' && state !== 'unsolved') return navigate('/');
    }, []);

    return (
        <Container>
            { state === "resolved" && <GameResolved/> }
            { state === "unsolved" && <GameUnsolved/> }
            <LinkButton variant='secondary' to='/game'>Play again</LinkButton>
        </Container>
    );
};