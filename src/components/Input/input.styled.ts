
import styled from 'styled-components';

export const InputContainer = styled.div`
    background: #232129;
    border-radius: 10px;
    padding: .5rem 1rem;
    border: 2px solid #232129;
    color: #666360;
    display: flex;
    align-items: center;

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
