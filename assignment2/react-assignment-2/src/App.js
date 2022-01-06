import './App.css';
import React,{useState} from 'react'

function App() {
  const [antrian,setAntrian]=useState([])
  const [input,setInput]=useState()
  let counter=0

  function push(input) {
    if (input!==undefined && input.toString()!=='') {
      antrian.unshift(input)
      setInput('')
      setAntrian(antrian)
    }
    else{
      alert('Invalid Input')
      setInput('')
    }
  }
  function pop() {
    const arr=[...antrian]
    arr.pop()
    setAntrian(arr)
  }

  return (
    <div className="container-fluid p-3">
        <span><h1 className='display-1'>Simulasi Antrian</h1></span>
        
        <div className='container p-3'><hr/>
          <div className='row-cols-6 p-3 justify-content-center'>
              <input id='tb'
                  className='tb'
                  type="text"
                  name='input' 
                  value={input||''}
                  onChange={(e)=>{setInput(e.target.value)}}
              />
          </div>

          <div className='row p-3 justify-content-center'>
            <div className='col-sm-auto'>
              <button className='btn btn-light' type="submit" onClick={()=>{push(input)}}>Antrikan !</button>
            </div>
            <div className='col-sm-auto '>
              <button className='btn btn-light' onClick={pop}>Majukan !</button>
            </div>
          </div>
        </div>

        <div className='container-md p-3 '><hr/>
          <div className='row p-3 justify-content-center'>
            <div className='col-sm-auto '> {antrian.length <1 && (<><span className="crd btn btn-light"><h4>[ Antrian Kosong !]</h4></span></>)}
                {antrian.map((data)=>{ 
                  counter++
                    if (counter>1) 
                      return(<code key={counter}>{' => '}<span className="crd btn btn-light"  ><h4>{data}</h4></span></code>)
                    else 
                      return(<span className="crd btn btn-light" key={counter} ><h4>{data}</h4></span>)
                  })
                }
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
