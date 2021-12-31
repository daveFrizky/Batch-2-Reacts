import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Hello World! Its Reacts Time.</h5>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
