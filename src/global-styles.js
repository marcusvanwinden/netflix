import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', 'Helvetica', 'sans-serif';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333;
        font-size: 16px;
        margin: 0px;
    }
`;

export default GlobalStyles;
