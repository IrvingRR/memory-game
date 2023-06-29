import styled, { css } from 'styled-components';

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
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
    }

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
    
    ${ props => props.flipped === 'true' && css`
        transform: rotateY(0deg);
        transition-delay: 0.2s;
        ` }
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
    align-items: center;
    color: var(--third-color);

    h2 {
        font-size: 50px;
    }
    
    ${ props => props.flipped === 'true' && css`
        transform: rotateY(90deg);
        transition-delay: 0s;
    ` }
`;