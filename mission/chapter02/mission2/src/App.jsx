import { MOVIES } from './mocks/movies'
import MovieItem from './components/MovieItem'


function App() {

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          background: 'white',
        }}
      >
        {MOVIES.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
      
    </>
  )
}

export default App
