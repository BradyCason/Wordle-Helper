import ColorSquare from "./ColorSquare"
import { useState } from "react"

export default function TypeGuess({setWord, color1, color2, color3, color4, color5, changeColor1, changeColor2, changeColor3, changeColor4, changeColor5}) {
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");

  function wordChange(e){
    let newWord = e.target.value;
    setWord(newWord);
    setLetter1(newWord.slice(0,1));
    setLetter2(newWord.slice(1,2));
    setLetter3(newWord.slice(2,3));
    setLetter4(newWord.slice(3,4));
    setLetter5(newWord.slice(4,5));
  }

  return (
    <div className="vert-flex">
      <input className="type-guess-input" maxLength={5} type="text" onChange={wordChange}></input>
      <div style={{display: "flex", marginBottom: "5px"}}>
        <ColorSquare letter={letter1} color={color1} onClick={changeColor1}/>
        <ColorSquare letter={letter2} color={color2} onClick={changeColor2}/>
        <ColorSquare letter={letter3} color={color3} onClick={changeColor3}/>
        <ColorSquare letter={letter4} color={color4} onClick={changeColor4}/>
        <ColorSquare letter={letter5} color={color5} onClick={changeColor5}/>
      </div>
    </div>
  )
}