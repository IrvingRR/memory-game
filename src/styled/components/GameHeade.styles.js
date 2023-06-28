import styled from 'styled-components';

export const GameHeaderElement = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const GameLogo = styled.div`
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