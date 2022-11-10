// Importing the CSS File
import "./css/app.css";
import RollDice from "./RollDice";

// Importing the useState hook
import { useEffect, useState, useRef } from "react";
import DiceGrid from "./DiceGrid";

function App() {
  const [data1, setData1] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data2, setData2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [diceTotals1, setDiceTotals1] = useState([0, 0, 0]);
  const [diceTotals2, setDiceTotals2] = useState([0, 0, 0]);

  const finalScore1 = `${diceTotals1.reduce((a, b) => a + b, 0)}`;
  const finalScore2 = `${diceTotals2.reduce((a, b) => a + b, 0)}`;
  //the pocket die value
  const [pocketDice, setPocketDice] = useState(0);

  //Creating turn state for, which indicates player turn
  const [turn, setTurn] = useState(1);
  // can place the dice
  const [canPlace, setCanPlace] = useState(false);

  // Creating a reset state, which indicates whether
  // the game should be reset or not
  const [reset, setReset] = useState(false);

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState("");

  // Sets the reset property to true
  // which starts the chain
  // reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      return;
    }
    // remove matches
    const [dataMeow, dataRawr] = removeAllMatches(data1, data2);

    if (JSON.stringify(dataMeow) !== JSON.stringify(data1)) {
      setData1(dataMeow);
      setData2(dataRawr);
      return;
    } else {
      setTurn(turn === 1 ? 2 : 1);
      setCanPlace(false);
    }
    const finalDice1 = calculateTotals(data1);
    setDiceTotals1(finalDice1);
    const finalDice2 = calculateTotals(data2);
    setDiceTotals2(finalDice2);

    if (checkWin()) {
      setWinner("Player 1 Wins");
    }
    //check winner
  }, [JSON.stringify(data1), JSON.stringify(data2)]);

  const calculateTotals = (grid) => {
    const row1 = calculateRow(grid.slice(0, 3));
    const row2 = calculateRow(grid.slice(3, 6));
    const row3 = calculateRow(grid.slice(6, 9));
    return [row1, row2, row3];
  };

  // rest all the things !!!
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setData1([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setData2([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(1);
    setWinner("");
    setReset(false);
  }, [reset]);

  const checkWin = () => {
    return !data1.includes(0) || !data2.includes(0);
  };

  return (
    <div className="screen">
      {/* Shrinks the popup when there is no winner */}
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        {/* Display the current winner */}
        <div className="winner-text">{winner}</div>
        <div className="winner-text">
          {finalScore1} to {finalScore2}
        </div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <DiceGrid
        pocketDice={pocketDice}
        player={1}
        turn={turn}
        canPlace={canPlace}
        data={data1}
        setData={setData1}
        diceTotals={diceTotals1}
      />
      <RollDice
        setPocketDice={setPocketDice}
        turn={turn}
        setCanPlace={setCanPlace}
        canRoll={canPlace}
      />
      <DiceGrid
        pocketDice={pocketDice}
        player={2}
        turn={turn}
        canPlace={canPlace}
        data={data2}
        setData={setData2}
        diceTotals={diceTotals2}
      />
    </div>
  );
}

const removeAllMatches = (gridA, gridB) => {
  // this would have been easier if they were an array of arrays should have done that :)
  const [row1A, row1B] = removeMatches(gridA.slice(0, 3), gridB.slice(0, 3));

  const [row2A, row2B] = removeMatches(gridA.slice(3, 6), gridB.slice(3, 6));

  const [row3A, row3B] = removeMatches(gridA.slice(6, 9), gridB.slice(6, 9));

  return [row1A.concat(row2A, row3A), row1B.concat(row2B, row3B)];
};

const removeMatches = (rowA, rowB) => {
  // get intersection
  const arr = intersection(rowA, rowB);
  let filterA = rowA;
  let filterB = rowB;
  // get nozero value
  const duplicate = arr.find((element) => element > 0);
  if (duplicate) {
    filterA = rowA.filter((x) => x !== duplicate);
    filterB = rowB.filter((x) => x !== duplicate);

    filterA.push(0, 0, 0);
    filterB.push(0, 0, 0);

  }

  return [filterA.slice(0, 3), filterB.slice(0, 3)];
};

const calculateRow = (triple) => {
  const [a, b, c] = triple;
  // all the same
  if (a === b && b === c) {
    return a * 9;
  }
  if (a === b) {
    return a * 4 + c;
  }
  if (a === c) {
    return a * 4 + b;
  }
  if (b === c) {
    return b * 4 + a;
  }
  return a + b + c;
};

const intersection = (array1, array2) => {
  return array1.filter((value) => array2.includes(value));
};

export default App;
