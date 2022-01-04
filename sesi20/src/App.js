import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header className="header">
        <h1>My first React App</h1>
    </header>
)
}

function Content(){
  return(
    <div className="content">
        <p>Silahkan isikan dengan apa aja
            yang ada di dalam pikiranmu.
            <br/>Semoga Tahun 2022 bisa berkah buat semuanya
        </p>
    </div>
)
}

function Footer(){
  return(
    <div className="footer">
        <p>&copy; My self - 2022</p>
    </div>
)
}

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Content/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
