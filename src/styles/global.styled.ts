
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #312e38;
        color: #fff;
    }

    p {
        margin: 1rem;
    }

    button {
        cursor: pointer;
    }
`;
