
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-color: #312e38;
        color: #fff;
        overflow-x: hidden;
    }

    p {
        margin: 1rem;
    }

    button {
        cursor: pointer;
    }
`;
