import { useEffect, useState } from "react";
import "./css/diceGrid.css";
import DiceSlot from "./DiceSlot";

const DiceGrid = ({ pocketDice, player, turn, setTurn }) => {
  const [data, setData] = useState([1, 0, 3, 4, 5, 6, 1, 2, 3]);

  useEffect(() => {
    setTurn(turn === 1 ? 2 : 1)
  }, [data])

  return (
    <div>
      <span className="gridTitle"> Player {player} </span>
      <div className="diceGrid">
        {data.map((val, i) => (
          <DiceSlot
            canClick={turn === player}
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
