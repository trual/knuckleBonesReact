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
  //the pocket die value
  const [pocketDice, setPocketDice] = useState(0);

  //Creating turn state for, which indicates player turn
  const [turn, setTurn] = useState(0);

  return (
    <div className="screen">
      <DiceGrid
        pocketDice={pocketDice}
        player={1}
        turn={turn}
        setTurn={setTurn}
      />
      <RollDice setPocketDice={setPocketDice} turn={turn} />
      <DiceGrid
        pocketDice={pocketDice}
        player={2}
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  );
}

export default App;
