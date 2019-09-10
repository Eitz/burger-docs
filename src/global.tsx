import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: #0D0C1D;
        color: #EFFFFA;
        display: flex;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        padding: 5rem;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

`;
