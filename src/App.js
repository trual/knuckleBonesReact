// Importing the CSS File
import "./css/app.css";
import RollDice from "./RollDice";

// Importing the useState hook
import { useEffect, useState } from "react";
import DiceGrid from "./DiceGrid";

function App() {
  //the pocket die value
  const [pocketDice, setPocketDice] = useState(0);

  //Creating turn state for, which indicates player turn
  const [turn, setTurn] = useState(0);
  // can place the dice
  const [canPlace, setCanPlace] = useState(false)
  // possibly need a can roll?

  useEffect(()=>{
    console.log("canplace: " + canPlace)
  }, [canPlace])

  return (
    <div className="screen">
      <DiceGrid
        pocketDice={pocketDice}
        player={1}
        turn={turn}
        setTurn={setTurn}
        canPlace={canPlace}
        setCanPlace={setCanPlace}
      />
      <RollDice setPocketDice={setPocketDice} turn={turn} setCanPlace={setCanPlace} canRoll={canPlace} />
      <DiceGrid
        pocketDice={pocketDice}
        player={2}
        turn={turn}
        setTurn={setTurn}
        canPlace={canPlace}
        setCanPlace={setCanPlace}
      />
    </div>
  );
}

export default App;
