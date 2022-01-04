import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [placeholder,setPlaceholder]=useState('Hi');
  const [currTime,setCurrTime]=useState(0);

  function getTime(){ 
    fetch('/time')
    .then((res) => res.json())
    .then((data) => {setCurrTime(data.time)})
  }
  
  useEffect(() => {
    fetch('/hello')
    .then(res => res.json())
    .then(data => {setPlaceholder(data.result)})
    
    const timeInterval=setInterval(()=>{
      getTime()
     // prod(currTime)
     },1000)
 
     return()=>{
       clearInterval(timeInterval)
     }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
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
        <p>
          Flask is welcoming flask : {placeholder}<br/>
          The Current time is {Date(currTime)}
        </p>
      </header>
    </div>
  );
}

// function prod(time) {
//   console.log(time);
//   //time+=1000
// }

export default App;
