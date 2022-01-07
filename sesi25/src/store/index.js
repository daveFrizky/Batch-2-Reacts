import {createStore,applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// 1. state
const initialState={
    counter:0
}


// 2. reducer
function counterReducer(state=initialState,action) {
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
const middleware = applyMiddleware(thunk,logger)
const store=createStore(counterReducer, compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

//store.subscribe() menerima sebuah function sbg parameter
store.subscribe(()=>console.log(store.getState()))

//store.dispatch() menerima obj literal sbg parameter
// store.dispatch({type:'INCREMENT',payload:1})

export default store