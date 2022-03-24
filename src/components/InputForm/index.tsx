import React, { TextareaHTMLAttributes, useState } from 'react';
import * as Styled from './style';

type InputFormType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value: string;
    maxLength?: number;
    disabled?: boolean;
};

function InputForm({ value, placeholder, maxLength, disabled = false, readOnly = false }: InputFormType) {
    const [formValue, setFormValue] = useState<string>(value || '');
    const isDirty = value !== formValue;
    const remainMaxLength = maxLength && maxLength - formValue.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue(e.currentTarget.value);
    };

    return (
        <Styled.Form>
            <Styled.Label>
                <Styled.Textarea
                    value={formValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    maxLength={maxLength}
                ></Styled.Textarea>
                {maxLength && <div>{remainMaxLength}</div>}
            </Styled.Label>

            {isDirty && <Styled.FormButton type='submit'>Save</Styled.FormButton>}
        </Styled.Form>
    );
}

export default InputForm;
