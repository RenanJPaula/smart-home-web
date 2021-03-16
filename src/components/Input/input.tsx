import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputContainer } from './input.styled';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => {
    return (
        <InputContainer>
            {Icon && <Icon size="20" />}
            <input {...props} />
        </InputContainer>
    );
}

export default Input;