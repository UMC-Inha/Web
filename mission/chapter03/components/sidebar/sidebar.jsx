import { SidebarContainer } from "./styled/styled"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <h2 onClick={()=>{
                navigate("/search")
            }}>찾기</h2>
            <h2 onClick={()=>{
                navigate("/movies")
            }}>영화</h2>
        </SidebarContainer>
    )
}