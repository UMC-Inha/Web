import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: fixed;
    top: 60px; /* Navbar 높이만큼 아래에 고정 */
    left: 0;
    width: 250px;
    height: calc(100vh - 60px); /* Navbar 높이를 제외한 전체 높이 */
    background-color: #111;
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 900;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    color: #ccc;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        color: #fff;
    }

    svg {
        font-size: 20px;
    }
`;
