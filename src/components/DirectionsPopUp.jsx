export default function DirectionsPopUp({closeWindow, directions}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeWindow}>&times;</span>
          <h2>Directions</h2>
          <p>{directions}</p>
        </div>
      </div>
    </div>
  );
}