// import logo from './logo.svg';
import './App.css';
import Game from './components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <div className="App-content">
        <Game />
      </div>
      <footer className="App-footer">
        Copyright 2021.
      </footer>
    </div>
  );
}

export default App;
