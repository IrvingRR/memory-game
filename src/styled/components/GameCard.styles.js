import styled from 'styled-components';

export const GameCardElement = styled.div`
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
