import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    animation: fadeIn 1s ease-in-out;

    h2 {
        font-size: var(--fs-xxl);
    }
`;