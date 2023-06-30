import styled, { css } from 'styled-components';

/* 
    This file content all styles specially for GameCard component using styled-components
*/

export const GameCardElement = styled.div`
    display: flex;
    height: 130px;
    align-items: center;
    justify-content: center;
    background-color: var(--background-secondary-color);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    transform-style: preserve-3d;

    ${ props => props.flipped === 'true' && css`
        transform: rotateY(180deg);
    ` }

    img {
        width: 50px;
        height: 50px;
    }
`;

export const GameCardFront = styled.div`
    background-color: var(--background-secondary-color);
    position: absolute;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: rotateY(90deg);
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    `;

export const GameCardBack = styled.div`
    background-color: var(--primary-color-hover);
    position: absolute;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transition-delay: 0.2s;
    display: flex;
    justify-content: center;
    border-radius: var(--radius);
    align-items: center;
    color: var(--third-color);
    backface-visibility: hidden;

    h2 {
        font-size: 50px;
    }
`;