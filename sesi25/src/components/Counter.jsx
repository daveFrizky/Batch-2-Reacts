import { useDispatch,useSelector } from "react-redux";
import {incrementCounter} from '../store/actions/counterAction'

function Counter(params) {
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)

    function increment() {
        dispatch(incrementCounter())
    }
    function decrement() {
        dispatch({type:'DECREMENT',payload:1})
    }
    function addBy10() {
        dispatch({type:'INCREMENT',payload:10})
    }
    return(
        <>
            <h2>Let's Counting!</h2>
            
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy10}>Add By 10</button>
        </>
    )
    
}
export default Counter