export default function BottomButtonsPlayground({clear, openDirections, openWordsLeft, openBestGuess, openTestGuess}) {
  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "100%"}} className="bottom-buttons">
      <button style={{flex: 1, height: "40px", margin: "4px"}} className="playground-button button button-green" onClick={openWordsLeft}>Words Left</button>
      <button style={{flex: 1, height: "40px", margin: "4px"}} className="playground-button button button-green" onClick={openBestGuess}>Best Guess</button>
      <button style={{flex: 1, height: "40px", margin: "4px"}} className="playground-button button button-green" onClick={openTestGuess}>Test Guess</button>
      <button style={{flex: 1, height: "40px", margin: "4px"}} className="playground-button button button-grey" onClick={clear}>Clear</button>
      <button style={{flex: 1, height: "40px", margin: "4px"}} className="playground-button button button-grey" onClick={openDirections}>Directions</button>
    </div>
  )
}