// Importing the CSS File
import "./css/app.css";
import RollDice from "./RollDice";

// Importing the useState hook
import { useEffect, useState } from "react";
import DiceGrid from "./DiceGrid";

function App() {
  const [data1, setData1] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data2, setData2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //the pocket die value
  const [pocketDice, setPocketDice] = useState(0);

  //Creating turn state for, which indicates player turn
  const [turn, setTurn] = useState(0);
  // can place the dice
  const [canPlace, setCanPlace] = useState(false);

  useEffect(() => {
    // remove matches
    const [dataMeow, dataRawr] = removeAllMatches(data1, data2);
    //
    if (JSON.stringify(dataMeow) !== JSON.stringify(data1)) {
      setData1(dataMeow);
      setData2(dataRawr);
    } else {
      setTurn(turn === 1 ? 2 : 1);
      setCanPlace(false);
    }
  }, [JSON.stringify(data1), JSON.stringify(data2)]);

  useEffect(() => {
    console.log("canplace: " + canPlace);
  }, [canPlace]);

  return (
    <div className="screen">
      <DiceGrid
        pocketDice={pocketDice}
        player={1}
        turn={turn}
        canPlace={canPlace}
        data={data1}
        setData={setData1}
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
      />
    </div>
  );
}

const removeAllMatches = (gridA, gridB) => {
  // this would have been easier if they were an array of arrays should have done that :)
  const [row1A, row1B] = removeMatches(gridA.slice(0, 3), gridB.slice(0, 3));

  const [row2A, row2B] = removeMatches(gridA.slice(3, 6), gridB.slice(3, 6));

  const [row3A, row3B] = removeMatches(gridA.slice(6, 9), gridB.slice(6, 9));

  console.log("rowA: " + row1A);
  return [row1A.concat(row2A, row3A), row1B.concat(row2B, row3B)];
};

const removeMatches = (rowA, rowB) => {
  // get intersection
  const arr = intersection(rowA, rowB);
  console.log("intersection array: " + arr);
  let filterA = rowA;
  let filterB = rowB;
  if (arr.length > 1) {
    // get nozero value

    const duplicate = arr.find((element) => element > 0);
    console.log(duplicate);
    filterA = rowA.filter((x) => x !== duplicate);
    filterB = rowB.filter((x) => x !== duplicate);

    filterA.push(0, 0);
    filterB.push(0, 0);

    console.log("removeMatches");
  }
  return [filterA.slice(0, 3), filterB.slice(0, 3)];
};

const intersection = (array1, array2) => {
  return array1.filter((value) => array2.includes(value));
};

export default App;
