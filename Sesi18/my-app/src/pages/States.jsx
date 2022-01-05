import { useState } from 'react';
import { useParams } from 'react-router-dom';

function States () {
  // == stateless component sebelum React 16.8
  //const [ state, setState ] = useState(initialValue)
  const props=useParams()
  const [  name,  setName ] = useState(props.name ||'Budi')
  const [ anotherName, setAnotherName ] = useState('Fikri')
  
  function changeName (e) {
    // cara 1: useState tambahan
    const oldName = name
    setName(anotherName)
    setAnotherName(oldName)

    // cara 2: conditional
    // setName(name === 'Budi' ? 'Fikri' : 'Budi')
  }

  return (
  <>
    <p>
      <h2>Edit <code>{ name }</code> and save to reload.</h2>
    </p>
    <button onClick={changeName}>Change name</button>
  </>
  )
}

export default States
