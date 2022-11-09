import "./css/dice.css";

const Dice = ({ roll }) => {
  if (roll === 1) {
    return <div className="dice img-1"></div>;
  } else if (roll === 2) {
    return <div className="dice img-2"></div>;
  } else if (roll === 3) {
    return <div className="dice img-3"></div>;
  } else if (roll === 4) {
    return <div className="dice img-4"></div>;
  } else if (roll === 5) {
    return <div className="dice img-5"></div>;
  } else if (roll === 6) {
    return <div className="dice img-6"></div>;
  } else {
    return <div className="dice ">!!!</div>;
  }
};

export default Dice;
