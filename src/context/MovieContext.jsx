import { createContext, useContext, useState } from 'react';

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movie, setMovie] = useState(null);
  const [plot, setPlot] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovie = async (title) => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=b4088261&t=${title}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovie(data);
        setPlot(data.Plot);
        setError('');
      } else {
        setError(data.Error);
        setMovie(null);
        setPlot('');
      }
    } catch (err) {
      setError('Something went wrong');
      setMovie(null);
      setPlot('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movie, setMovie, plot, setPlot, error, setError, loading, setLoading, fetchMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
