import {createStore} from 'redux'

// 1. state
const initialState={
    counter:0
}
// 2. reducer
function reducer(state=initialState,action) {
    const {type,payload}=action

    switch (type) {
        case 'INCREMENT':
            return {...state,counter:state.counter+payload}
        case 'DECREMENT':
            return {...state,counter:state.counter-payload}
        default:
            return state
    }
}
// 3. create store()
const store=createStore(reducer)

//store.subscribe() menerima sebuah function sbg parameter
store.subscribe(()=>console.log(store.getState()))

//store.dispatch() menerima obj literal sbg parameter
// store.dispatch({type:'INCREMENT',payload:1})

export default store