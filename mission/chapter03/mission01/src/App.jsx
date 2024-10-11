import RootLayout from "./layout/root-layout"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MoviesPage from "./pages/moviesPage";
import CategoryPage from "./pages/categoryPage";
import SearchPage from "./pages/searchPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {   index:true,
                element : <MoviesPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            {
                path: 'movies',
                element: <CategoryPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signup',
                element: <SignupPage/>
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
