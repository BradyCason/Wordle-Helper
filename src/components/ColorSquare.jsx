import { useState, useEffect } from "react";

export default function ColorSquare({letter, color, onClick}) {
    const [colorClass, setColorClass] = useState("button-white")

    useEffect(() => {
        if (color == "w"){
            setColorClass("button color-square button-white")
        }
        else if (color == "g"){
            setColorClass("button color-square button-green")
        }
        else if (color == "y"){
            setColorClass("button color-square button-yellow")
        }
      }, [color])

    return (
      <>
        <button className={"color-square " + colorClass} onClick={onClick}>{letter}</button>
      </>
    )
  }