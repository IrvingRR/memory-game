import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButtonElement = styled(Link)`
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