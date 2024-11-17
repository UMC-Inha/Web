import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Category from './category/page';
import MovieList from './movielist/page';
import Detail from './detail/page';


export default function Movies() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    switch (path) {
        case undefined  :
            return <Category/>;
        case "now-playing":
            return <MovieList path={"now-playing"}/>;
        case "popular":
            return <MovieList path={"popular"}/>;
        case "top-rated":
            return <MovieList path={"top-rated"}/>;
        case "up-coming":
            return <MovieList path={"up-coming"}/>;
        default:
            return <Detail id={path}/>;
    }
}