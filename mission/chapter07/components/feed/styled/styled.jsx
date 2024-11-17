import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:8px;
`

const PostSkeleton = styled.div`
    width: 200px;
    height: 300px;
    background-color: #f2f2f2;
    border-radius: 10px;
`

export {
    MainContainer,
    PostSkeleton
}