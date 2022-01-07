import logo from './logo.svg';
import './App.css';

function App() {
  let button='button'
  return (
    <div className="App">
      <header className="App-header">
      <title>why do we need test ?</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='btn' role={button}>Users List</button>
        <button className='btn' role={button}>Back to Home</button>
      </header>
    </div>
  );
}

export default App;
