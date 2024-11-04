
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MoviesPage from './pages/Movies/movies';
import CategoryPage from './pages/Movies/category';
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
        path: 'movies/:category', // 특정 카테고리의 영화 데이터를 보여주는 페이지 경로
        element: <MoviesPage />
      },
      {
        path: 'login', // '로그인' 페이지 경로
        element: <LoginPage />
      },
      {
        path: 'signup', // '회원가입' 페이지 경로
        element: <SignupPage />
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
