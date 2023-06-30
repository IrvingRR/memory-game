import styled from 'styled-components';

/* 
    This file content all styles specially for GameOverScreen screen using styled-components
*/

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    text-align: center;
    animation: fadeIn 0.3s ease-in-out;

    a:hover {
            animation: bounce 0.5s ease-in;
    }

    h2 {
        font-size: var(--fs-xxl);

        span {
            color: var(--primary-color);
        }
    }
`;