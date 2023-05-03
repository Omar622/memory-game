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
    let notChosen = [];
    for (let i = 0; i < numberOfImages; ++i) {
      if (chosen.includes(i)) continue;
      notChosen.push(i);
    }
    const indexOfNewImage = _randomInRange(0, 3);
    for (let i = 0; i < 4; ++i) {
      if (i === indexOfNewImage) {
        // push one ID not chosen yet
        let randomId = notChosen[_randomInRange(0, notChosen.length - 1)];
        while (set.includes(randomId))
          randomId = notChosen[_randomInRange(0, notChosen.length - 1)];
        set.push(randomId);
      } else {
        // push random IDs
        let randomId = _randomInRange(0, numberOfImages - 1);
        while (set.includes(randomId))
          randomId = _randomInRange(0, numberOfImages - 1);
        set.push(randomId);
      }
    }
    return set;
  }

  const handleChooseImage = (id, evaluateChoice) => {
    if (_isCorrectChoose(id)) {
      evaluateChoice(true).then(() => {
        _choose(id)
        // player chosen all images correctly
        if (chosen.length === numberOfImages)
          _reset();
      });
    } else {
      evaluateChoice(false).then(() => _reset());
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