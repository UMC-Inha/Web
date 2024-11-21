import styled from 'styled-components';

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    padding: 2rem;
    border-radius: 8px;
    color: white;
`;

export const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin-bottom: 1rem;
    font-size: 16px;
    border: 2px solid ${props => (props.error ? 'red' : '#333')};
    border-radius: 4px;
    background-color: white;

    &:focus {
        border-color: #3498db;
        outline: none;
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
    width: 300px;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: ${props => (props.disabled ? '#b0b0b0' : '#e74c3c')};
    border: none;
    border-radius: 4px;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        background-color: ${props => (props.disabled ? '#b0b0b0' : '#c0392b')};
    }
`;
