import style from '../css/Card.module.css';
import { useEffect, useRef } from 'react';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function Card(props) {
  const { id, handleChooseImage } = props;
  const divRef = useRef(null);

  useEffect(() => {
    const currentRef = divRef.current;

    const evaluateChoice = async (isGood) => {
      const choiceStyle = isGood ? style.goodChoice : style.badChoice;
      currentRef.classList.add(choiceStyle);
      await delay(500);
      currentRef.classList.remove(choiceStyle);
    }

    const onClickHandler = () => handleChooseImage(id, evaluateChoice);

    currentRef?.addEventListener('click', onClickHandler);
    return () => currentRef?.removeEventListener('click', onClickHandler);
  }, [handleChooseImage, id]);

  return (
    <div
      className={style.card}
      ref={divRef}
    >
      <img
        className={style.cardImg}
        key={id}
        src={require(`../assets/images/${id}.png`)}
        alt={`AOT ${id}`}
      ></img>
    </div>
  );
}

export default Card;