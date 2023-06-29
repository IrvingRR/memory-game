import styled from 'styled-components';

export const GameBoardElement = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-auto-rows: 130px;
    grid-auto-flow: dense;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
    margin: auto;
   
`;