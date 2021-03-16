import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './button.styled';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Container type="button" {...props}>
            {children}
        </Container>
    );
}

export default Button;