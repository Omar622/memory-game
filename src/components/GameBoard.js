import Card from './Card';
import style from '../css/GameBoard.module.css';

function GameBoard(props) {
  const { chosenImages, handleChooseImage } = props;

  return (
    <div className={style.gameBoard}>
      {
        chosenImages.map((id) =>
          <Card
            key={id}
            id={id}
            handleChooseImage={handleChooseImage}
          ></Card>
        )
      }
    </div>
  );
}

export default GameBoard;