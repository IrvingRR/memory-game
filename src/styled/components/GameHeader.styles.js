import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* 
    This file content all styles specially for GameHeader component using styled-components
*/

export const GameHeaderElement = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const GameLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 35px;
        height: 35px;
    }

    h2 {
        font-size: var(--fs-m);
        color: var(--font-color);

        span {
            color: var(--primary-color);
        }
    }
`;