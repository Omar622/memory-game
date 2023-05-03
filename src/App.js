import './App.css';
import View from './pages/View';
import useModel from './hooks/model';

// controller
function App() {
  // 17 is number of used images
  const [getBestScore, getCurrentScore, getRandomSet, handleChooseImage] = useModel(17);

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
