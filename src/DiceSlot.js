import "./css/diceSlot.css";
import Dice from "./Dice";

const DiceSlot = ({ diceSlot, gridData, setGridData, pocketDice }) => {
  function handleDiceClick(e) {
    let data = [...gridData];
    data[diceSlot] = 0;
    setGridData(data);
    console.log("clicked a die");
  }

  function handleEmptyDiceClick() {
    let data = [...gridData];
    data[diceSlot] = pocketDice;
    setGridData(data);
    console.log("clicked a slot ");
    console.log(pocketDice);
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
