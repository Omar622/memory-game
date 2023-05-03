import { useState } from "react";

function useModel(numberOfImages) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosen, setChosen] = useState([]);

  const _randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const _isCorrectChoose = (id) => {
    return !chosen.includes(id);
  }

  const _choose = (id) => {
    if (_isCorrectChoose(id)) {
      let tmp = chosen;
      tmp.push(id);
      setChosen(tmp);
      if (bestScore < score + 1)
        setBestScore(score + 1);
      setScore(score + 1);
    }
  }

  const _reset = () => {
    setChosen([]);
    setScore(0);
  }

  const getBestScore = () => {
    return bestScore;
  }

  const getCurrentScore = () => {
    return score;
  }

  const getRandomSet = () => {
    let set = [];
    // push one ID not chosen yet
    let randomId = _randomInRange(0, numberOfImages);
    while (chosen.includes(randomId))
      randomId = _randomInRange(0, numberOfImages);
    set.push(randomId);
    // push three random IDs
    for (let i = 0; i < 3; ++i) {
      randomId = _randomInRange(0, numberOfImages);
      while (set.includes(randomId))
        randomId = _randomInRange(0, numberOfImages);
      set.push(randomId);
    }
    return set;
  }

  const handleChooseImage = (id) => {
    if (_isCorrectChoose(id)) {
      _choose(id);
    } else {
      _reset();
    }
  }

  return [
    getBestScore,
    getCurrentScore,
    getRandomSet,
    handleChooseImage,
  ];
}

export default useModel;