import React from 'react';
import { Container } from './tolltip.styled';

interface TooltipProps {
    message: string;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, message, className }) => {
    return (
        <Container className={className}>
            {children}
            <span>
                {message}
            </span>
        </Container>
    );
}

export default Tooltip;