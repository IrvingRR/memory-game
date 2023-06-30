import styled from 'styled-components';

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

    h2 {
        font-size: var(--fs-xxl);

        span {
            color: var(--primary-color);
        }
    }
`;