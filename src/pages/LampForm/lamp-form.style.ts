
import { shade } from 'polished';
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 425px;
    margin: 1rem;
    width: 100%;

    h1 {
        text-align: center;
    }
    
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #f4ede8;
        margin-top: 2rem;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }

        svg {
            margin-right: 1rem;
        }
    }
`;
