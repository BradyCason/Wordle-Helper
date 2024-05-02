export default function BestGuessPopUp({closeWindow, bestGuess}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeWindow}>&times;</span>
          <h2>Best Guess</h2>
          <p>{bestGuess}</p>
        </div>
      </div>
    </div>
  );
}