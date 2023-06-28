import styled, { css } from 'styled-components';

export const ButtonElement = styled.button`
    padding: 8px 10px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    transition: var(--transition);
    color: var(--font-color);
    font-weight: 600;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 8px;

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