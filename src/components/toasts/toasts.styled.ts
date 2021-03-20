
import styled, { css } from 'styled-components';

export interface ToastProps {
    type?: 'info' | 'success' | 'error';
}

const toastTypeVatiations = {
    info: css`
        border-color: #307bc5;
        color: #307bc5;
    `,
    success: css`
        border-color: #30c57b;
        color: #30c57b;
    `,
    error: css`
        border-color: #c53030;
        color: #c53030;
    `,
}

export const ToastsContainer = styled.ul`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    margin: 0;
    overflow: hidden;
    list-style: none;
`

export const Toast = styled.li<ToastProps>`
    position: relative;
    width: 360px;
    padding: 1rem;
    margin: 0;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    background-color: #232129;
    border: 2px solid;

    ${(props) => toastTypeVatiations[props.type || 'info']}

    & + li {
        margin-top: .5rem;
    }
`

export const ToastContent = styled.div`
    flex: 1;
    margin: 0 .5rem;
    display: flex;
    flex-direction: column;
`

export const Title = styled.strong`
    font-weight: 500;
`

export const Message = styled.p`
    margin: 0;
    margin-top: .5rem;
    font-size: .8rem;
`

export const CloseToast = styled.button`
    position: absolute;
    top: .5rem;
    right: .5rem;
    border: 0;
    padding: 0;
    background: transparent;
    color: inherit;

    &:focus, 
    &:hover {
        outline: none;
    }
`
