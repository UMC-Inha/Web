import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "../styled/rootLayout"
import Login from '../pages/login/page';
import Signup from '../pages/singup/page';
import Main from '../pages/main/page';
import Search from '../pages/search/page';
import Movies from '../pages/movies/page';
import Category from '../pages/movies/category/page';
import NowPlaying from '../pages/movies/content/page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
              index:true,
              element: <Main/>
            },
            {
              path:'login',
              element: <Login/>
            },
            {
              path:'signup',
              element: <Signup/>
            },
            {
              path:"search",
              element: <Search/>
            },{
              path:'movies',
              element: <Movies/>,
              children:[
                {
                  path:'*',
                  element:null
                },
              ]
            }
        ]
    },
    {
        path: '/movies',
        element: <h1>영화 페이지 입니다.</h1>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
