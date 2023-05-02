import { useState } from "react";
import GameBoard from "../components/GameBoard";
import style from '../css/View.module.css';

function View(props) {
  const { bestScore, currentScore, chosenImages, handleChooseImage } = props;
  const [activePlay, setActivePlay] = useState(false);

  const handlePlayBtn = () => {
    setActivePlay(true);
  }

  return (
    <div className={style.view}>
      <h1>Memory Game</h1>
      <div className={style.options}>
        <button
          className={style.playBtn}
          onClick={handlePlayBtn}
        >Play</button>
        <div>
          <h3>Best: {bestScore}</h3>
          <h3>Score: {currentScore}</h3>
        </div>
      </div>
      {
        activePlay ?
          <GameBoard
            chosenImages={chosenImages}
            handleChooseImage={handleChooseImage}
          ></GameBoard> :
          <div></div>
      }
    </div>

  );
}

export default View;