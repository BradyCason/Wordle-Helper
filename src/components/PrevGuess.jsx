import ColorSquare from "./ColorSquare"
import { useEffect, useState } from "react"

export default function PrevGuess({word, color1, color2, color3, color4, color5, changeColor1, changeColor2, changeColor3, changeColor4, changeColor5}) {
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");

  useEffect(() => {
    setLetter1(word.slice(0,1))
    setLetter2(word.slice(1,2))
    setLetter3(word.slice(2,3))
    setLetter4(word.slice(3,4))
    setLetter5(word.slice(4,5))
  }, [word])

  if (word){
    return (
      <div>
        <ColorSquare letter={letter1} color={color1} onClick={null}/>
        <ColorSquare letter={letter2} color={color2} onClick={null}/>
        <ColorSquare letter={letter3} color={color3} onClick={null}/>
        <ColorSquare letter={letter4} color={color4} onClick={null}/>
        <ColorSquare letter={letter5} color={color5} onClick={null}/>
      </div>
    )
  }
  else{
    return (<></>)
  }
}