
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
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
