import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { InputContainer, Error } from './input.styled';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const fieldConfig = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        fieldConfig.registerField({
            name: fieldConfig.fieldName,
            ref: inputRef.current,
            path: 'value'
        });
        setIsFilled(!!inputRef.current?.value);
    }, [fieldConfig]);

    return (
        <InputContainer
            isFocused={isFocused}
            isFilled={isFilled}
            isErrored={!!fieldConfig.error}
        >
            {Icon && <Icon />}
            <input
                defaultValue={fieldConfig.defaultValue}
                ref={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />

            {
                !!fieldConfig.error &&
                <Error message={fieldConfig.error}>
                    <FiAlertCircle />
                </Error>
            }
        </InputContainer>
    );
}

export default Input;