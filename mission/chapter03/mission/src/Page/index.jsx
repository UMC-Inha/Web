import MovieListPage from "./MovieListPage";
import {Routes, Route} from "react-router-dom"
const Page = () => {
  return(
    <main>
      <MovieListPage />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
      </Routes>
    </main>
  )
}

export default Page;