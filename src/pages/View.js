import GameBoard from "../components/GameBoard";
import style from '../css/View.module.css';

function View(props) {
  const { bestScore, currentScore, chosenImages, handleChooseImage } = props;

  return (
    <div className={style.view}>
      <div>
      <h1>Memory Game</h1>
      <h3>Best: {bestScore}</h3>
      <h3>Score: {currentScore}</h3>
      <GameBoard
        chosenImages={chosenImages}
        handleChooseImage={handleChooseImage}
      ></GameBoard>
      </div>
    </div>

  );
}

export default View;