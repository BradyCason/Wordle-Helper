import { useEffect, useState } from "react";

export default function WordsLeftPopUp({closeWindow, wordList}) {
  const [text, setText] = useState()

  useEffect(() => {
    if(wordList.length > 0){
      setText(wordList.join(" "));
    }
    else{
      setText("No Words Left")
    }
  }, [wordList])

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeWindow}>&times;</span>
          <h2>Words Left</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}