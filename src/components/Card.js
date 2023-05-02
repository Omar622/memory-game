import style from '../css/Card.module.css';
import { useEffect, useRef } from 'react';

function Card(props) {
  const { id, handleChooseImage } = props;
  const divRef = useRef(null);

  useEffect(() => {
    function onClickHandler() {
      handleChooseImage(id);
    }
    const currentRef = divRef.current;
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