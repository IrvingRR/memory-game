import styled, { css } from 'styled-components';

/* 
    This file content all styles specially for IconButton element using styled-components
*/


export const IconButtonElement = styled.button`
    width: 30px;
    height: 30px;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--white-color);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    img {
        width: 20px;
        height: 20px;
    }

    /* Secondary Variant */
    ${ props => props.variant === 'secondary' && css`
        background-color: var(--secondary-color);

        &:hover {
            background-color: var(--secondary-color-hover);
        }

        &:active {
            background-color: var(--secondary-color);
        }
    ` }
`;