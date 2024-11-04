import { MOVIES } from "../../mocks/movies"
import Feed from "../../components/feed/feed";

export default function Main() {
    const _data = MOVIES.results;

    return(
        <>
            <Feed movies={_data}/>
        </>
    )
}