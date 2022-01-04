import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [articles,setArticle]=useState([]);
  useEffect(() => {
    fetch('/articles')
      .then((res) => res.json())
      .then((data) => {setArticle(data)})
    
  },[]);
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous"></link>
      <nav className='navbar sticky-top' style={{backgroundColor:'#e3f2fd',height:120}}>
        <h1 style={{marginLeft:160,fontStyle:'oblique'}}><b>React App</b></h1>
      </nav>
      <header className="App-header container-fluid">
        <img src={logo} className="App-logo" alt="logo" />
        <span style={{textAlign:'center',fontSize:'50pt'}}>React Assignment 4</span><br/>
        <p>
          {articles.map((data)=>(
            <div className='isi '>
              <h2 style={{color:"#3b6ac9"}}>{data.title}</h2>
              {data.body}<br/><br/>
              {data.date}<br/>
              <hr/>
            </div>
          ))}
        </p>
        
      </header>
    </div>
  );
}

export default App;
