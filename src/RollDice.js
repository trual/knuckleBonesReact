import Dice from "./Dice";
import { useState } from "react";
import "./css/rollDice.css";

function RollDice({ setPocketDice, turn, setCanPlace, canRoll }) {
  const [roll, setRoll] = useState(0);

  const handleClick = async () => {
    // this is for dramatic rolling effect
    // for (let i = 0; i < 8; i++) {
    //   await timeout(200); //for 1 sec delay
    //   setRoll(Math.round(Math.random() * 5 + 1));
    // }
    let face = Math.round(Math.random() * 5 + 1);
    setRoll(face);
    setPocketDice(face);
    setCanPlace(true)
    console.log("rolldice turn: " + turn)
  };

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="rollDiceWithTitle">
      <span style={{ color: "green" }}>Player Turn: {turn} </span>
      <div className="rolldice">
        <Dice roll={roll} />
        <button className="rollButton" onClick={handleClick} disabled={canRoll}>
          roll
        </button>
      </div>
    </div>
  );
}

export default RollDice;
