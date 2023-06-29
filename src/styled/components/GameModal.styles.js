import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: var(--background-primary-color-gradient);
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    color: var(--font-color);
    gap: 15px;
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    .modal-close-button {
        position: absolute;
        top: 20px;
        right: 20px
    }
    
    ${ props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    ` }
`;