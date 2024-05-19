import WordleSolver from "../wordle_solver";
import { useState } from "react";
import TypeGuess from "./TypeGuess";
import TestGuessPopUp from "./TestGuessPopUp";
import WordsLeftPopUp from "./WordsLeftPopUp";
import BestGuessPopUp from "./BestGuessPopUp";
import DirectionsPopUp from "./DirectionsPopUp";
import BottomButtonsPlayground from "./BottomButtonsPlayground";

export default function Playground() {
  let solver = new WordleSolver();
  const [wordList, setWordList] = useState(solver.wordList);

  const [wordsLeftOpen, setWordsLeftOpen] = useState(false);
  const [bestGuessOpen, setBestGuessOpen] = useState(false);
  const [testGuessOpen, setTestGuessOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const [bestGuess, setBestGuess] = useState("");

  const [color11, setColor11] = useState("w")
  const [color12, setColor12] = useState("w")
  const [color13, setColor13] = useState("w")
  const [color14, setColor14] = useState("w")
  const [color15, setColor15] = useState("w")
  const [color16, setColor16] = useState("w")
  const [color21, setColor21] = useState("w")
  const [color22, setColor22] = useState("w")
  const [color23, setColor23] = useState("w")
  const [color24, setColor24] = useState("w")
  const [color25, setColor25] = useState("w")
  const [color26, setColor26] = useState("w")
  const [color31, setColor31] = useState("w")
  const [color32, setColor32] = useState("w")
  const [color33, setColor33] = useState("w")
  const [color34, setColor34] = useState("w")
  const [color35, setColor35] = useState("w")
  const [color36, setColor36] = useState("w")
  const [color41, setColor41] = useState("w")
  const [color42, setColor42] = useState("w")
  const [color43, setColor43] = useState("w")
  const [color44, setColor44] = useState("w")
  const [color45, setColor45] = useState("w")
  const [color46, setColor46] = useState("w")
  const [color51, setColor51] = useState("w")
  const [color52, setColor52] = useState("w")
  const [color53, setColor53] = useState("w")
  const [color54, setColor54] = useState("w")
  const [color55, setColor55] = useState("w")
  const [color56, setColor56] = useState("w")

  const[word1, setWord1] = useState("");
  const[word2, setWord2] = useState("");
  const[word3, setWord3] = useState("");
  const[word4, setWord4] = useState("");
  const[word5, setWord5] = useState("");

  function narrowWordList(){
    let tempWordList = solver.wordList;
    let tempAttemptNum = 1
    if (word1.length == 5){
      tempWordList = solver.narrowList(word1.toLowerCase(), [color11, color12, color13, color14, color15], tempWordList);
      tempAttemptNum++;
    }
    if (word2.length == 5){
      tempWordList = solver.narrowList(word2.toLowerCase(), [color21, color22, color23, color24, color25], tempWordList);
      tempAttemptNum++;
    }
    if (word3.length == 5){
      tempWordList = solver.narrowList(word3.toLowerCase(), [color31, color32, color33, color34, color35], tempWordList);
      tempAttemptNum++;
    }
    if (word4.length == 5){
      tempWordList = solver.narrowList(word4.toLowerCase(), [color41, color42, color43, color44, color45], tempWordList);
      tempAttemptNum++;
    }
    if (word5.length == 5){
      tempWordList = solver.narrowList(word5.toLowerCase(), [color51, color52, color53, color54, color55], tempWordList);
      tempAttemptNum++;
    }
    setWordList(tempWordList);
    return([tempAttemptNum, tempWordList])
  }

  function clear(){
    setWordList(solver.wordList)
    document.querySelectorAll(".color-square").forEach(square => {
      square.innerHTML = "";
    })
    document.querySelectorAll(".type-guess-input").forEach(input => {
      input.value = "";
    })
    setWord1("");
    setWord2("");
    setWord3("");
    setWord4("");
    setWord5("");
    setColor11("w");
    setColor12("w");
    setColor13("w");
    setColor14("w");
    setColor15("w");
    setColor16("w");
    setColor21("w");
    setColor22("w");
    setColor23("w");
    setColor24("w");
    setColor25("w");
    setColor26("w");
    setColor31("w");
    setColor32("w");
    setColor33("w");
    setColor34("w");
    setColor35("w");
    setColor36("w");
    setColor41("w");
    setColor42("w");
    setColor43("w");
    setColor44("w");
    setColor45("w");
    setColor46("w");
    setColor51("w");
    setColor52("w");
    setColor53("w");
    setColor54("w");
    setColor55("w");
    setColor56("w");
  }

  function openWordsLeft(){
    narrowWordList()
    setWordsLeftOpen(true)
  }

  function openBestGuess(){
    let newList = narrowWordList()
    setBestGuess(solver.bestWord(newList[0], newList[1])[0].word.toUpperCase());

    setBestGuessOpen(true)
  }

  function openTestGuess(){
    narrowWordList()
    setTestGuessOpen(true)
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
    <div className="vert-flex justify-space">
      <div className="vert-flex">
        <h2>Playground</h2>
        <TypeGuess wordNum="1" setWord={setWord1} color1={color11} color2={color12} color3={color13} color4={color14} color5={color15} color6={color16} changeColor1={() => changeColor(setColor11, color11)} changeColor2={() => changeColor(setColor12, color12)} changeColor3={() => changeColor(setColor13, color13)} changeColor4={() => changeColor(setColor14, color14)} changeColor5={() => changeColor(setColor15, color15)} changeColor6={() => changeColor(setColor16, color16)}/>
        <TypeGuess wordNum="2" setWord={setWord2} color1={color21} color2={color22} color3={color23} color4={color24} color5={color25} color6={color26} changeColor1={() => changeColor(setColor21, color21)} changeColor2={() => changeColor(setColor22, color22)} changeColor3={() => changeColor(setColor23, color23)} changeColor4={() => changeColor(setColor24, color24)} changeColor5={() => changeColor(setColor25, color25)} changeColor6={() => changeColor(setColor26, color26)}/>
        <TypeGuess wordNum="3" setWord={setWord3} color1={color31} color2={color32} color3={color33} color4={color34} color5={color35} color6={color36} changeColor1={() => changeColor(setColor31, color31)} changeColor2={() => changeColor(setColor32, color32)} changeColor3={() => changeColor(setColor33, color33)} changeColor4={() => changeColor(setColor34, color34)} changeColor5={() => changeColor(setColor35, color35)} changeColor6={() => changeColor(setColor36, color36)}/>
        <TypeGuess wordNum="4" setWord={setWord4} color1={color41} color2={color42} color3={color43} color4={color44} color5={color45} color6={color46} changeColor1={() => changeColor(setColor41, color41)} changeColor2={() => changeColor(setColor42, color42)} changeColor3={() => changeColor(setColor43, color43)} changeColor4={() => changeColor(setColor44, color44)} changeColor5={() => changeColor(setColor45, color45)} changeColor6={() => changeColor(setColor46, color46)}/>
        <TypeGuess wordNum="5" setWord={setWord5} color1={color51} color2={color52} color3={color53} color4={color54} color5={color55} color6={color56} changeColor1={() => changeColor(setColor51, color51)} changeColor2={() => changeColor(setColor52, color52)} changeColor3={() => changeColor(setColor53, color53)} changeColor4={() => changeColor(setColor54, color54)} changeColor5={() => changeColor(setColor55, color55)} changeColor6={() => changeColor(setColor56, color56)}/>
      </div>
      <BottomButtonsPlayground clear={clear} openDirections={() => {setDirectionsOpen(true)}} openWordsLeft={openWordsLeft} openBestGuess={openBestGuess} openTestGuess={openTestGuess}/>

      {wordsLeftOpen && (<WordsLeftPopUp closeWindow={() => {setWordsLeftOpen(false)}} wordList={wordList}/>)}
      {bestGuessOpen && (<BestGuessPopUp closeWindow={() => {setBestGuessOpen(false)}} bestGuess={bestGuess}/>)}
      {testGuessOpen && (<TestGuessPopUp closeWindow={() => {setTestGuessOpen(false)}} wordList={wordList}/>)}
      {directionsOpen && (<DirectionsPopUp closeWindow={() => {setDirectionsOpen(false)}} directions={'Type the words you have guessed in Wordle in the corresponding boxes.\n\nAdjust the colors seen on your guesses.\n\nChoose one of the green buttons depending on what functionality you would like:\n"Words Left" provides a list of all of the words that the answer could be.\n"Best Guess" provides the best next guess.\n"Test Guess" lets you provide a word and, a score (out of 100) is provided for that word.'}/>)}
    </div>
  )
  }