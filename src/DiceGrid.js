import { useState } from "react";
import "./css/diceGrid.css";
import DiceSlot from "./DiceSlot";

const DiceGrid = ({ pocketDice }) => {
  const [data, setData] = useState([1, 0, 3, 4, 5, 6, 1, 2, 3]);
  return (
    <div className="diceGrid">
      {data.map((val, i) => (
        <DiceSlot
          key={i}
          diceSlot={i}
          gridData={data}
          setGridData={setData}
          pocketDice={pocketDice}
        />
      ))}
    </div>
  );
};

export default DiceGrid;
