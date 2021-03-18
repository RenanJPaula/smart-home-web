
import styled, { css } from 'styled-components';
import Tooltip from '../tooltip/tooltip';

interface ContainerPropos {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const InputContainer = styled.div<ContainerPropos>`
    background: #232129;
    border-radius: 10px;
    padding: .5rem 1rem;
    border: 2px solid #232129;
    color: #666360;
    display: flex;
    align-items: center;

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    ${props => props.isErrored && css`
        color: #c53030;
        border-color: #c53030;
    `}
    
    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    & + div {
        margin-top: .5rem;
    }


    svg {
        margin-right: .5rem;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        outline: 0;
        color: #f4ede8;

        &:focus {
            outline: 0;
        }

        &::placeholder {
            color: #666360;
        }
    }
`;

export const Error = styled(Tooltip)`
    color: #c53030;

    svg {
        margin: 0;
        margin-left: .5rem;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
