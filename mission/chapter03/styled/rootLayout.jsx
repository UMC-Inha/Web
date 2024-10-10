import {Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';
import styled from 'styled-components';

export default function RootLayout() {
    return (
        <MainContainer>
            <Navbar/>
            <Container>
                <Sidebar/>
                <ContentContainer>
                    <Outlet/>
                </ContentContainer>
            </Container>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:stretch;
    width:100%;
`

const ContentContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:stretch;
    width:100%;
    background-color: black;
    color: white;
    padding:16px;
`

const Container = styled.div`
    display:flex;
    `