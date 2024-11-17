import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border:${props => props.error ? '1px solid red' : '1px solid #ccc'};
    &:focus {
        outline: none;
        border: 1px solid #333;
    }
`;

export {
    Input
}