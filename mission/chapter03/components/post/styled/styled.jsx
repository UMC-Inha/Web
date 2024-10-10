import styled from "styled-components";

const PostImage = styled.img`
    object-fit: cover;
    width: 100%;
    height:300px;
    border-radius: 1rem;
    object-position: center;
    background-size: cover;
`

const PostContainer = styled.div`
    width: 200px;
    border-radius: 1rem;
`

const PostTitle = styled.h2`
    color: white;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 10px;
`

const PostDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const PostDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export {
    PostImage,
    PostContainer,
    PostTitle,
    PostDate,
    PostDetailContainer
}