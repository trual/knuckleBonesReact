import "./css/diceGrid.css";
import DiceSlot from "./DiceSlot";

const DiceGrid = ({
  pocketDice,
  player,
  turn,
  canPlace,
  data,
  setData,
  diceTotals,
}) => {
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
