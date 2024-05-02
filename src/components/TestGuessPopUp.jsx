import { useState } from "react";
import WordleSolver from "../wordle_solver";

export default function TestGuessPopUp({closeWindow, wordList}) {
  const [score, setScore] = useState("")
  const [text, setText] = useState("")
  const solver = new WordleSolver();

  function findScore(e){
    e.preventDefault()
    let word = document.getElementById("test-guess-input").value;
    setText(word + " score: ")
    setScore(solver.testGuess(word, wordList))
  }

  function deleteNonAlph(e){
    e.preventDefault()
    let regex = /^[a-zA-Z]+$/;
    let newString = ""
    for (let i = 0; i < e.target.value.length; i++){
        if (regex.test(e.target.value[i])){
            newString += e.target.value[i].toUpperCase()
        }
    }
    e.target.value = newString;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeWindow}>&times;</span>
          <h2>Test Guess</h2>
          <form onSubmit={findScore}>
            <input required onChange={deleteNonAlph}minLength="5" maxLength="5" title="Please use only alphabetic characters" id="test-guess-input" type="text"></input>
            <input type="submit"></input>
          </form>

          <p>{text}{score}</p>
        </div>
      </div>
    </div>
  );
}