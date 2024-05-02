import { Link } from "react-router-dom";

export default function LeftNavBar() {

    return (
      <div className="left-nav-bar">
        <h1>Wordle Helper</h1>
        <p>Solve the Wordle with the optimal number of guesses:</p>
        <Link className="button button-green nav-button" to='/optimal-solve'>Optimal Solve</Link>
        <p>Test a guess, find the words left, find the optimal guess, and more at any spot in a game of Wordle:</p>
        <Link className="button button-green nav-button" to='/playground'>Playground</Link>
      </div>
    )
  }