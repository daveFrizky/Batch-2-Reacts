import logo from './logo.svg';
import './App.css';
import Kanban from './components/kanban'

function App() {
  return (
    
    <div className="App">
      <nav class="navbar">
        <div class="nav container-fluid justify-content-start mt-auto">
            < img src={logo} className="App-logo" alt="logo" /><h3 className='display-6'>Kanban's Board</h3>
        </div>
        
      </nav>
        
        <div className='container-fluid justify-content-center align-content-center'>
              <Kanban/>
        </div>
    </div>
  );
}

export default App;
