import React, { TextareaHTMLAttributes, useState } from 'react';
import * as Styled from './style';

type InputFormType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value: string;
    maxLength?: number;
    disabled?: boolean;
    onChange?(value: string): void;
    onSubmit?(value: string): void;
};

function InputForm({
    value,
    placeholder,
    maxLength,
    disabled = false,
    readOnly = false,
    onChange,
    onSubmit,
}: InputFormType) {
    const [formValue, setFormValue] = useState<string>(value || '');
    const isDirty = value !== formValue;
    const count = maxLength && maxLength - formValue.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue(e.currentTarget.value);
        onChange?.(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(formValue);
    };

    return (
        <Styled.Form onSubmit={handleSubmit}>
            <Styled.Label>
                <Styled.Textarea
                    value={formValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    maxLength={maxLength}
                ></Styled.Textarea>
                {maxLength && <Styled.Counter>{count}</Styled.Counter>}
            </Styled.Label>

            {isDirty && <Styled.FormButton type='submit'>Save</Styled.FormButton>}
        </Styled.Form>
    );
}

export default InputForm;
