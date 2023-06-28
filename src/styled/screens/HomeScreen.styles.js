import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;

    a:hover {
            animation: bounce 0.5s ease-in;
    }
    
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    animation: slideInUp 0.5s ease-in;

    img {
        width: 60px;
        height: 60px;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    animation: slideInDown 0.5s ease-in;
`;