import { useMovieContext } from '../context/MovieContext';

export function useMovieSearch() {
  const { setMovie, setError, setPlot, setLoading } = useMovieContext();

  const searchMovie = async (title) => {
    if (!title.trim()) return alert('Enter movie title!');
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=b4088261`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'False') {
        setError("Movie hasn't been found!");
        setMovie(null);
        return;
      }
      setMovie(data);
      setPlot('');
      setError('');
    } catch (e) {
      setError('Data error');
    } finally {
      setLoading(false);
    }
  };

  const loadPlot = async (title) => {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&plot=full&apikey=b4088261`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlot(data.Plot);
    } catch (e) {
      setPlot('Plot error');
    }
  };

  return { searchMovie, loadPlot };
}
