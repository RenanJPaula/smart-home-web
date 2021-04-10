import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
    return (
        <Container type="button" {...props} disabled={loading}>
            {!!loading ? 'Loading...' : children}
        </Container>
    );
}

export default Button;