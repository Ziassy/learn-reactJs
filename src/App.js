import './App.css';

function App() {

  let a = 4;
  let b = 6;
  return (
    // must have parent element
    <div className="App">
      {a + b / 5}

    </div>
  );
}

export default App;
