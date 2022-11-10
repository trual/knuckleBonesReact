import { useEffect, useState } from "react";
import "./css/diceGrid.css";
import DiceSlot from "./DiceSlot";

const DiceGrid = ({ pocketDice, player, turn, setTurn, canPlace, setCanPlace }) => {
  const [data, setData] = useState([0,0,0,0,0,0,0,0,0]);

  useEffect(() => {
    setTurn(turn === 1 ? 2 : 1)
    setCanPlace(false)
  }, [data])

  return (
    <div>
      <span className="gridTitle"> Player {player} </span>
      <div className="diceGrid">
        {data.map((val, i) => (
          <DiceSlot
            canClick={turn === player && canPlace}
            key={i}
            diceSlot={i}
            gridData={data}
            setGridData={setData}
            pocketDice={pocketDice}
          />
        ))}
      </div>
    </div>
  );
};

export default DiceGrid;
