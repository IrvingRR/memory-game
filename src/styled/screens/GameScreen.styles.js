import styled from 'styled-components';


/* 
    This file content all styles specially for GameScreen screen using styled-components
*/


export const GameContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        text-align: center;
    }
`;

export const GameContent = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GameTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: var(--fs-xxl);
    }
`;

export const ActionsModal = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;