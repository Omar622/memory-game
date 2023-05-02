import './App.css';
import View from './pages/View';

function App() {
  const bestScore = 3;
  const currentScore = 1;
  const chosenImages = [0, 1, 2, 3];
  const handleChooseImage = (id) => {
    console.log('chose', id);
  }

  return (
    <div className="App">
      <View
        bestScore={bestScore}
        currentScore={currentScore}
        chosenImages={chosenImages}
        handleChooseImage={handleChooseImage}
      ></View>
    </div>
  );
}

export default App;
