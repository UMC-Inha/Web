import styled from "styled-components"

export default function Button({children, onClick,color}) {
    return (
        <CustomButton color={color} onClick={onClick}>{children}</CustomButton>
    )
}

const CustomButton = styled.button`
    border-radius: .5rem;
    background-color: ${props => props.color};
    border: none;
    font-size: .75rem;
    width:100px;
    padding: .5rem 1rem;
    color: white;
    &:hover{
        background-color: gray;
    }
`