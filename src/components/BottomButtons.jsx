export default function BottomButtons({restart, openDirections, openWordsLeft}) {
  return (
    <div className="bottom-buttons">
      <button className="button button-grey" onClick={restart}>Restart</button>
      <button className="button button-grey" onClick={openDirections}>Directions</button>
      <button className="button button-grey" onClick={openWordsLeft}>Words Left</button>
    </div>
  )
}