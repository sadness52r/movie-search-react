import { useState } from 'react';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import ErrorMessage from './components/ErrorMessage';
import { useMovieContext } from './context/MovieContext';
import { useMovieSearch } from './hooks/useMovieSearch';

function App() {
  const [title, setTitle] = useState('');
  const { movie, plot, error } = useMovieContext();
  const { searchMovie, loadPlot } = useMovieSearch();

  return (
    <div id="app">
      <Header
        title={title}
        onChange={(e) => setTitle(e.target.value)}
        onSearch={() => searchMovie(title)}
      />
      <main className="main-content">
        {error && <ErrorMessage message={error} />}
        {movie && <MovieDetails movie={movie} onFetchPlot={() => loadPlot(movie.Title)} plot={plot} />}
      </main>
    </div>
  );
}

export default App;