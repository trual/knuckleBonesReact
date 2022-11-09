import Dice from "./Dice";
import { useState } from "react";
import "./css/rollDice.css"

function RollDice() {
  const [roll, setRoll] = useState(2);

  const handleClick = async () => {
    for (let i = 0; i < 8; i++) {
        await timeout(200); //for 1 sec delay
        setRoll(Math.round((Math.random()*5) + 1));
        
    }
    setRoll(Math.round((Math.random()*5) + 1));
  }
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  return (
    <div className="rolldice">
      <Dice roll={roll} />
      <button className="rollButton" onClick={handleClick}>roll</button>
    </div>
  );
}

export default RollDice;
