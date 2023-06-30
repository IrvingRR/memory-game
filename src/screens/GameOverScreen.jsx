import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "../styled/screens/GameOverScreen.styles";
import { GameResolved, GameUnsolved } from "../components";
import { LinkButton } from "../common";

export const GameOverScreen = () => {

    const { state } = useParams();
    const navigate = useNavigate();

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