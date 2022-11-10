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
    /// setGridData(data); here for testing
    console.log("clicked a die");
  }

  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8

  function handleEmptyDiceClick() {
    let data = [...gridData];
    if (canClick && pocketDice !== 0) {
      // so we are able to set a dice
      if (diceSlot < 3) {
        // check neighbors
        if (data[0] === 0) {
          data[0] = pocketDice;
        } else if (data[1] === 0) {
          data[1] = pocketDice;
        } else if (data[2] === 0) {
          data[2] = pocketDice;
        }
         
      }
      else if (diceSlot > 5) {
        if (data[6] === 0) {
            data[6] = pocketDice;
          } else if (data[7] === 0) {
            data[7] = pocketDice;
          } else if (data[8] === 0) {
            data[8] = pocketDice;
          }
      }
      else {
        if (data[3] === 0) {
            data[3] = pocketDice;
          } else if (data[4] === 0) {
            data[4] = pocketDice;
          } else if (data[5] === 0) {
            data[5] = pocketDice;
          }
      }
      

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
