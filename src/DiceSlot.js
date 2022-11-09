import "./css/diceSlot.css";
import Dice from "./Dice";

const DiceSlot = ({
  diceSlot,
  gridData,
  setGridData,
  pocketDice,
  canClick = false,
}) => {
  function handleDiceClick(e) {
    let data = [...gridData];
    data[diceSlot] = 0;
    setGridData(data);
    console.log("clicked a die");
    console.log("canClick: " + canClick);
  }

  function handleEmptyDiceClick() {
    let data = [...gridData];
    data[diceSlot] = pocketDice;
    if (canClick && pocketDice !== 0) {
      setGridData(data);
    }
    console.log("clicked a slot ");
  }

  return gridData[diceSlot] ? (
    <div onClick={(e) => handleDiceClick(e)}>
      <Dice roll={gridData[diceSlot]} />
    </div>
  ) : (
    <div className="diceSlot" onClick={handleEmptyDiceClick}></div>
  );
};

export default DiceSlot;
