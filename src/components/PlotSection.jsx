function PlotSection({ onFetchPlot, plot }) {
  return (
    <div className="plot-content">
      <button className="plot-btn" onClick={onFetchPlot}>Show plot</button>
      <div className="plot-details">{plot && <p>{plot}</p>}</div>
    </div>
  );
}
export default PlotSection;
