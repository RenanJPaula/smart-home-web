
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        position: absolute;
        padding: .5rem;
        border-radius: 4px;
        font-size: 1rem;
        background-color: #ff9000;
        color: #312e38;
        text-align: center;
        width: 160px;
        bottom: calc(100% + .5rem);
        left: 50%;
        transform: translateX(calc(-50% + .25rem));
        transition: opacity .4s;
        opacity: 0;
        visibility: hidden;


        &::before {
            content: '';
            border-style: solid;
            border-color: #ff9000 transparent;
            border-width: 6px 6px 0 6px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;