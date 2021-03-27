import { shade } from 'polished';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const OpenMenu = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: border-color .4s;

    &:focus, 
    &:hover {
        outline: none;
        svg {
            color: ${shade(0.2, '#ff9000')};
        }
    }

    &:hover {
        border-color: ${shade(0.2, '#ff9000')};
    }
    
    svg {
        color: #ff9000;
        width: 2rem;
        height: 2rem;
        margin: 0;
        padding: 0;
    }
`;