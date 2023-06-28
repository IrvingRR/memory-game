import styled from 'styled-components';

export const GameContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const GameContent = styled.div`
    width: 100%;
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