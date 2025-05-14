import PlotSection from './PlotSection';
import MoviePoster from './MoviePoster';

function MovieDetails({ movie, onFetchPlot, plot }) {
  return (
    <div className="movie-content">
      <div>
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Rating IMDb:</strong> {movie.imdbRating}</p>
        <MoviePoster src={movie.Poster} />
      </div>
      <PlotSection onFetchPlot={onFetchPlot} plot={plot} />
    </div>
  );
}
export default MovieDetails;
