import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /* Variables */
    :root {

        /* Colors */
        --background-primary-color: rgb(17, 21, 37);
        --background-secondary-color: rgb(22, 28, 49);
        --background-third-color: rgb(43, 218, 227);

        --primary-color: rgb(36, 227, 227);
        --primary-color-hover: rgb(27, 172, 172);
        
        --secondary-color: rgb(202, 118, 244);
        --secondary-color-hover: rgb(157, 92, 190);

        --third-color: rgb(237, 172, 42);
        --white-color: rgb(255, 255, 255);

        /* Font */
        --font-color: rgb(255, 255, 255);
        --font: 'Roboto', sans-serif;

        --fs-xs: 12px;
        --fs-s: 13px;
        --fs-m: 16px;
        --fs-l: 20px;
        --fs-xl: 30px;
        --fs-xxl: 40px; 

        /* Other variables */
        --transition: 0.3s ease;
        --radius: 4px;
        --shadow-down: box-shadow: 0px 3px 5px 0px rgb(21, 27, 48);
        /* -webkit-box-shadow: 0px 3px 5px 0px rgb(21, 27, 48);
        -moz-box-shadow: 0px 3px 5px 0px rgb(21, 27, 48); */
        

    }

    /* Reset Styles */
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-primary-color);
        color: var(--font-color);
        font-family: var(--font);
        font-size: var(--fs-m);
        min-height: 100vh;
    }

    a { 
        text-decoration: none;
        transition: var(--transition);
    }

    svg, path {
        background: var(--font-color);
        color: var(--white-color);
    }

    button {
        outline: none;
        border: 1px solid transparent;
        cursor: pointer;
    }

    /* Animations */
    @keyframes slideInUp {
        0% {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
        }
        
        100% {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes slideInDown {
        0% {
            transform: translateY(100%);
            opacity: 0;
            visibility: hidden;
        }
        
        100% {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes bounce {
        0%, 20%, 60%, 100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(-10px);
        }

        80% {
            transform: translateY(-5px);
        }
    }

`;