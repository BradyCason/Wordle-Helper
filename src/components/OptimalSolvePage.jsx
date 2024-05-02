import WordleSolver from "../wordle_solver"
import { useState } from "react";
import PrevGuess from "./PrevGuess";
import CurrentGuess from "./CurrentGuess";
import BottomButtons from "./BottomButtons";
import WordsLeftPopUp from "./WordsLeftPopUp";
import DirectionsPopUp from "./DirectionsPopUp";

export default function OptimalSolvePage() {
  let solver = new WordleSolver();
  const [wordList, setWordList] = useState(solver.wordList);
  const [turnNum, setTurnNum] = useState(2);

  const [bottomText, setBottomText] = useState("");

  // prevGuesses: [{word: "", colors:[]}]
  const [prevGuesses,setPrevGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [color1, setColor1] = useState("w");
  const [color2, setColor2] = useState("w");
  const [color3, setColor3] = useState("w");
  const [color4, setColor4] = useState("w");
  const [color5, setColor5] = useState("w");
  // newGuesses: [{word: "", score: #}]
  const [newGuesses, setNewGuesses] = useState(solver.bestWord(1, wordList))

  const [wordsLeftOpen, setWordsLeftOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);

  function chooseGuess(e){
    let guess = e.target.innerHTML.slice(0,5);
    setCurrentGuess(guess)
    setNewGuesses([])
    setColor1("w")
    setColor2("w")
    setColor3("w")
    setColor4("w")
    setColor5("w")
  }

  function submitColors(){
    // Use solver to find 3 best guesses and update newGuesses
    const newWordList = solver.narrowList(currentGuess, [color1,color2,color3,color4,color5], wordList)
    setWordList(newWordList);
    if (color1 != "g" || color2 != "g" || color3 != "g" || color4 != "g" || color5 != "g"){
      let tempNewGuesses = solver.bestWord(turnNum, newWordList);
      setTurnNum(turnNum + 1);
      if (tempNewGuesses[0].word == "No Words"){
        setNewGuesses([])
        setBottomText("No possible words! Did you make a mistake?");
      }
      else if (tempNewGuesses[1].word == "No Words"){
        setNewGuesses([tempNewGuesses[0]])
      }
      else if (tempNewGuesses[2].word == "No Words"){
        setNewGuesses([tempNewGuesses[0],tempNewGuesses[1]])
      }
      else{
        setNewGuesses(tempNewGuesses)
      }
    }
    else{
      setBottomText("Solved!");
    }

    // Set prevGuesses and currentGuesses
    setPrevGuesses(prevGuesses.concat([{word:currentGuess, colors:[color1,color2,color3,color4,color5]}]))
    setCurrentGuess("")
  }

  function restart(){
    setPrevGuesses([])
    setCurrentGuess("")
    setColor1("w")
    setColor2("w")
    setColor3("w")
    setColor4("w")
    setColor5("w")
    setWordList(solver.wordList)
    setTurnNum(2)
    setNewGuesses(solver.bestWord(1, solver.wordList))
    setBottomText("")
  }

  function changeColor(callback, color){
    if (color == "w"){
      callback("y")
    }
    else if (color == "y"){
      callback("g")
    }
    else{
      callback("w")
    }
  }

  return (
    <div>
    <div className="vert-flex justify-space">
      <div className="vert-flex">
        <h2>Optimal Solve</h2>

        {prevGuesses.map((prevGuess) => (
          <PrevGuess key={prevGuess.word} word={prevGuess.word} color1={prevGuess.colors[0]} color2={prevGuess.colors[1]} color3={prevGuess.colors[2]} color4={prevGuess.colors[3]} color5={prevGuess.colors[4]}/>
        ))}

        <CurrentGuess onSubmit={submitColors} word={currentGuess} color1={color1} color2={color2} color3={color3} color4={color4} color5={color5} changeColor1={() => changeColor(setColor1, color1)} changeColor2={() => changeColor(setColor2, color2)} changeColor3={() => changeColor(setColor3, color3)} changeColor4={() => changeColor(setColor4, color4)} changeColor5={() => changeColor(setColor5, color5)}/>

        <div className="vert-flex">
          {newGuesses.map((newGuess) => (
            <button key={newGuess.word} onClick={chooseGuess} className="button button-green new-guess-button">{newGuess.word} - {newGuess.score}</button>
          ))}
        </div>
        <p>{bottomText}</p>
      </div>

      <BottomButtons restart={restart} openDirections={() => {setDirectionsOpen(true)}} openWordsLeft={() => {setWordsLeftOpen(true)}}/>

    {wordsLeftOpen && (<WordsLeftPopUp closeWindow={() => {setWordsLeftOpen(false)}} wordList={wordList}/>)}
    {directionsOpen && (<DirectionsPopUp closeWindow={() => {setDirectionsOpen(false)}} directions={'Open Wordle on a different device.\n\nClick one of the three word options and type that word into Wordle. (The number next to each option is the score of that word.)\n\nAdjust the colors to match those in Wordle, and click "Submit"\n\nContinue this process until you have solved the Wordle.'}/>)}

    </div>
    </div>
  )
}