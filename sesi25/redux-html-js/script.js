//import Redux from 'redux'
//const Redux=require('redux')


// 1. state
const initialState={
    counter:0
}
// 2. reducer
const reducer=(state=initialState,action) => {
    const {type}=action

    switch (type) {
        case 'INCREMENT':
            return {counter:state.counter+1}
        case 'DECREMENT':
            return {counter:state.counter-1}
        default:
            return state
    }
}

// 3. create store()
var store=Redux.createStore(reducer)

//store.subscribe() menerima sebuah function sbg parameter
var el=document.getElementById('counter')
const render=()=>{el.innerHTML=store.getState().counter.toString()}
render()
store.subscribe(render)

var incEl=document.getElementById('increment')
var decEl=document.getElementById('decrement')

//store.dispatch() menerima obj literal sbg parameter
incEl.addEventListener('click',()=>{
    store.dispatch({type:'INCREMENT'})
})

decEl.addEventListener('click',()=>{
    store.dispatch({type:'DECREMENT'})
})