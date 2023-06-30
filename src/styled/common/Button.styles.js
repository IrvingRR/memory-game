import styled, { css } from 'styled-components';

/* 
    This file content all styles specially for Button element using styled-components
*/

export const ButtonElement = styled.button`
    padding: 8px 10px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    transition: var(--transition);
    color: var(--white-color);
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: var(--fs-m);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    /* Secondary Variant */
    ${props => props.variant === 'secondary' && css`
        background-color: var(--secondary-color);

        &:hover {
            background-color: var(--secondary-color-hover);
        }

        &:active {
            background-color: var(--secondary-color);
        }
    `}

`;