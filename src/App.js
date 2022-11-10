// Importing the CSS File
import "./css/app.css";
import RollDice from "./RollDice";

// Importing the useState hook
import { useEffect, useState } from "react";
import DiceGrid from "./DiceGrid";

function App() {
  const [data1, setData1] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data2, setData2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //the pocket die value
  const [pocketDice, setPocketDice] = useState(0);

  //Creating turn state for, which indicates player turn
  const [turn, setTurn] = useState(0);
  // can place the dice
  const [canPlace, setCanPlace] = useState(false)
  // possibly need a can roll?
  
  useEffect(() => {
    // remove matches
    setTurn(turn === 1 ? 2 : 1);
    setCanPlace(false);
  }, [data1, data2]);

  useEffect(()=>{
    console.log("canplace: " + canPlace)
  }, [canPlace])

  return (
    <div className="screen">
      <DiceGrid
        pocketDice={pocketDice}
        player={1}
        turn={turn}
        canPlace={canPlace}
        data={data1}
        setData={setData1}
      />
      <RollDice setPocketDice={setPocketDice} turn={turn} setCanPlace={setCanPlace} canRoll={canPlace} />
      <DiceGrid
        pocketDice={pocketDice}
        player={2}
        turn={turn}
        canPlace={canPlace}
        data={data2}
        setData={setData2}
      />
    </div>
  );
}

export default App;
