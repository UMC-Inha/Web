
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import CategoryPage from './pages/Movies/category';
import MovieRoute from './pages/movieRoute/movieRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RootLayout from './layout/root-layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // RootLayout에서 Sidebar와 Outlet을 관리
    children: [
      {
        path: 'search', // '찾기' 페이지 경로
        element: <SearchPage />
      },
      {
        path: 'movies', // '영화' 페이지 경로
        element: <CategoryPage />
      },
      
      {
        path: 'login', // '로그인' 페이지 경로
        element: <LoginPage />
      },
      {
        path: 'signup', // '회원가입' 페이지 경로
        element: <SignupPage />
      },
      {
        path: 'movies/:categoryOrmovieId', 
        element: <MovieRoute />
      }
    ]
  }
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
