import './App.css';
import View from './pages/View';
import useModel from './hooks/model';

// controller
function App() {
  const [getBestScore, getCurrentScore, getRandomSet, handleChooseImage] = useModel(16);

  return (
    <View
      bestScore={getBestScore()}
      currentScore={getCurrentScore()}
      chosenImages={getRandomSet()}
      handleChooseImage={handleChooseImage}
    ></View>
  );
}

export default App;
