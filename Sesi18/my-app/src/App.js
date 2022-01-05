import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Counter from './pages/Counter';
import States from './pages/States';
import Todos from './pages/Todos';


function App() {
  // const history=useHistory()
  // function setHistory(route) {
  //   history.push(route)
  // }
  return ( // == render() dari class component
  <Router>
    <div className="App container-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header><br/><br/>
      <Link to="/">Counter</Link><br/>
      <Link to="/states">States</Link><br/>
      <Link to="/states/:name">States with name</Link><br/>
      <Link to="/todos">Todos</Link><br/>
    <br/>
    <br/>
      <Switch>
        <Route path="/" exact ><Counter/></Route>
        <Route path="/states" ><States/></Route>
        <Route path="/states/:name" ><States/></Route>
        <Route path="/todos" ><Todos/></Route>
      </Switch>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  </Router>
  );
}

export default App;
