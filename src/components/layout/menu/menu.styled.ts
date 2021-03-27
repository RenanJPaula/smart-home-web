import { shade } from 'polished';
import styled from 'styled-components';

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: #312e38;
    padding: 1rem;
`;

export const MenuHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 425px;
    padding: 0 1rem;
`

export const CloseMenu = styled.button`
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

export const MenuList = styled.ul`
    list-style: none;
    max-width: 425px;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    margin: 1rem;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;

    a {
        color: #fff;
        text-decoration: none;
        transition: color .4s,  border-color .4s;
        border-bottom: 2px solid transparent;

        &:hover {
            color: ${shade(0.2, '#fff')};
            border-color: ${shade(0.2, '#fff')};
        }
    }
`;
