import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Category from './category/page';
import Content from './content/page';


export default function Movies() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    switch (path) {
        case undefined  :
            return <Category/>;
        case "now-playing":
            return <Content path={"now-playing"}/>;
        case "popular":
            return <Content path={"popular"}/>;
        case "top-rated":
            return <Content path={"top-rated"}/>;
        case "up-coming":
            return <Content path={"up-coming"}/>;
        default:
            return <Outlet />;
    }
}