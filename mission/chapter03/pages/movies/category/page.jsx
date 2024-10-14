import { ContentContainer } from "../styled/styled"
import { Link } from "react-router-dom"

const categoryList = [
    {
        path:'now-playing',
        name:"현재 상영중인"
    },
    {
        path:'popular',
        name:"인기있는"
    },
    {
        path:"top-rated",
        name:"높은 평가를 받은"
    },
    {
        path:"up-coming",
        name:"개봉 예정중인"
    }
]

export default function Category() {
    return (
        <>
            <h1>카테고리</h1>
            <ContentContainer>
                {
                    categoryList.map((category, index) => {
                        return(
                            <div key={index}>
                                <Link to={`/movies/${category.path}`}>{category.name}</Link>
                            </div>
                        )
                    })
                }
            </ContentContainer>
        </>
    )
}