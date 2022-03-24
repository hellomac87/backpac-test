import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    height: 80px;
    border: 0;
`;

export const Label = styled.label`
    position: relative;
    flex: auto;
    height: 100%;
    border: 0;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid #d9d9d9;
    padding: 8px;
    box-sizing: border-box;
    transition: all 0.25s ease;

    &:focus {
        outline: none;
        border-color: #ff7b30;
    }
    &:read-only {
        color: lightcoral;
        background-color: #fafafa;
        &:focus {
            border-color: #d9d9d9;
        }
    }
    &:disabled {
        color: gray;
        background-color: #fafafa;
    }
`;

export const Counter = styled.span`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    padding: 4px 6px;
    font-size: 12px;
    color: gray;
`;

export const FormButton = styled.button`
    width: 80px;
    height: 100%;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    color: #ff7b30;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.25s ease;

    &:hover {
        border-color: rgba(255, 123, 48, 0.1);
        background-color: rgba(255, 123, 48, 0.1);
    }
`;
