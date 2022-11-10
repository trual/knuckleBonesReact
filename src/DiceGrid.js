import { useEffect, useState } from "react";
import "./css/diceGrid.css";
import DiceSlot from "./DiceSlot";

const DiceGrid = ({
  pocketDice,
  player,
  turn,
  setTurn,
  canPlace,
  setCanPlace,
}) => {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [diceTotals, setDiceTotals] = useState([0, 0, 0]);

  useEffect(() => {
    setTurn(turn === 1 ? 2 : 1);
    setCanPlace(false);
    calculateTotals();
  }, [data]);

  const calculateTotals = () => {
    const row1 = calculateRow(data.slice(0,3))
    const row2 = calculateRow(data.slice(3,6))
    const row3 = calculateRow(data.slice(6,9))
     setDiceTotals([row1, row2, row3])
  };

  const calculateRow = (triple) => {
    const [a,b,c] = triple;
    // all the same
    if (a === b && b === c) {
        return a * b * c;
    }
    if (a=== b) {
        return a * 4 + c;
    }
    if (a === c) {
        return a * 4 + b
    }
    if (b === c) {
        return b * 4 + a
    }
    return a + b + c;
  }

  return (
    <div className="everything">
      <div className="gridAndTitle">
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
      <div className="totals">
        <div className="total">{diceTotals[0]}</div>
        <div className="total">{diceTotals[1]}</div>
        <div className="total">{diceTotals[2]}</div>
      </div>
    </div>
  );
};

export default DiceGrid;
