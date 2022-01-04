import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Button from './components/Button';
import { useState,useEffect } from 'react';

function App() {
  const [username,setName]=useState('Budi')
  const [todos,setTodos]=useState([])
  let temp='Click Me'
  function changeButton(str) {
    temp=str
  }
  function changeName(e){
    setName('ninja')
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(0,20)))//setTodos(data.slice(0,20)            
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Hello World! Its Reacts Time.</h5>
        <table className="table">
            <tbody>
                {
                    todos.map((todo,index) => (
                        <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "v" : "x" }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/><h2>{username}</h2>
        </p>
        <button onClick={()=>{changeButton('Atit');changeName()}}>hook button</button>
        <Button name={temp}/>
        <Header input='berhasil' batch=' dong'/>
        
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
