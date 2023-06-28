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

export const GameBoard = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 130px;
    grid-auto-flow: dense;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
   
`;

export const GameCard = styled.div`
    display: flex;
    height: 130px;
    align-items: center;
    justify-content: center;
    background-color: var(--background-secondary-color);
    padding: 10px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 50px;
        height: 50px;
    }
`;

export const GameTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: var(--fs-xxl);
    }
`;