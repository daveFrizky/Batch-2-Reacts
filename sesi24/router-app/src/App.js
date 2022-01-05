import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouterMatch,
  Redirect
}from 'react-router-dom'
import React,{useEffect,useState} from 'react';

function App() {
  return (
    <Router>
    <Link to="/">Home</Link>
    <Link to="/abouts">Abouts</Link> |&nbsp;
    <Link to="/about/fulan">About fulan</Link>
    <Link to="/about/fulana">About fulana</Link>
    <Link to="/contact">Contact</Link>
    <Switch>
      <Route path="/about/:name" children={<About/>}></Route>
      <Route path="/abouts/" ><Abouts/></Route>
      {/* <Route path="/contact"><Contact/></Route>
      <Route path="/"><Home/></Route> */}
      <Redirect exact from="/" to="/home"/>
    </Switch>
    {/* <div className="App">
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
      </header>
    </div> */}
    </Router>
  );
}

function About() {
  let {id}=useParams()
  const [user,setUser]=useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>response.json())
    .then((data)=>setUser(data))
  })
  return(
    <>
      <h3>Hallo {user.name}</h3>
      <p>{user.company.name}</p>
    </>
  )
}

function Abouts() {
  let {path,url}=useRouterMatch()
  return(
    <>
    <h1>WHo do you want to see ?</h1>
    <ul>
      <li><Link to={`${(url)}/fulan`}>Fulan</Link></li>
      <li><Link to={`${(url)}/fulana`}>Fulana</Link></li>
    </ul>
    <Switch>
      <Route exact path={path}><h3>Please select a name.</h3></Route>
      <Route exact path={`${path}/:name`}><About/></Route>
    </Switch>
    </>
  )
}

export default App;
