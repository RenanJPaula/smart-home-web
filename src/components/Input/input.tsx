import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputContainer } from './input.styled';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...props }) => {
    const inputRef = useRef(null);
    const fieldConfig = useField(name);

    useEffect(() => {
        fieldConfig.registerField({
            name: fieldConfig.fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldConfig]);

    return (
        <InputContainer>
            {Icon && <Icon size="20" />}
            <input defaultValue={fieldConfig.defaultValue} ref={inputRef} {...props} />
        </InputContainer>
    );
}

export default Input;