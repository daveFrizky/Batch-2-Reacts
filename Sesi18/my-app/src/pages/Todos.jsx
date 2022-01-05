import { useEffect, useState } from 'react';
import Card from '../components/Card';

function Todos () {
   // * Sesi 21: Fetch data
   const [ url ] = useState('https://jsonplaceholder.typicode.com/todos')
   const [ todos, setTodos ] = useState([])
   const [ todo, setTodo ] = useState()
 
   // * Fetch Data
   useEffect(() => {
     fetch(url)
       .then(response => response.json())
       .then(result => setTodos(result))
   }, [url])
 
   // * function untuk mendapatkan data spesifik
   function getTodo(id) {
    fetch(url + `/${id}`)
      .then(response => response.json())
      .then(result => setTodo(result))
  }

  return (
  <>
        {
          todo && (
            <div>
              {todo.title} - {todo.userId} - { todo.completed ? 'Completed' : 'Pending' }
              <button onClick={() => setTodo()}>Go back</button>
            </div>
          )
        }

        {
          !todo && todos.map(todo => (<>
            <div key={ todo.id }>
              <button onClick={() => getTodo(todo.id)}>
                { todo.title } by { todo.userId } - { todo.completed ? 'Completed' : 'Pending' }
              </button>
            </div>
            <Card
              key={todo.id}
              title={todo.title}
              userId={todo.userId}
              completed={todo.completed}
            /></>
          ))
        }
  </>
  )
}

export default Todos
