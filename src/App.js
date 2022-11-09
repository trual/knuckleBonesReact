// Importing the required components
import Board from "./Board";
import Info from "./Info";
// Importing the CSS File
import "./css/app.css";
import RollDice from "./RollDice";

// Importing the useState hook
import { useState } from "react";
import DiceGrid from "./DiceGrid";

function App() {
  // Creating a reset state, which indicates whether
  // the game should be reset or not
  const [reset, setReset] = useState(false);

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState("");

  // Sets the reset property to true
  // which starts the chain
  // reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };

  const [pocketDice, setPocketDice] = useState(1);

  return (
    <div className="screen">
        <DiceGrid pocketDice={pocketDice} />
      <div className="App">
        {/* Shrinks the popup when there is no winner */}
        <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
          {/* Display the current winner */}
          <div className="winner-text">{winner}</div>
          {/* Button used to reset the board */}
          <button onClick={() => resetBoard()}>Reset Board</button>
        </div>
        {/* Custom made board component comprising of
			the tic-tac-toe board */}
        {/* <Board
          reset={reset}
          setReset={setReset}
          winner={winner}
          setWinner={setWinner}
        />
        <Info /> */}
      </div>
      <RollDice setPocketDice={setPocketDice}/>
    </div>
  );
}

export default App;
