import {createStore,applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// 1. state
const initialState={
    Id:[],
    Body:[],
    boardPosition:[],
}


// 2. reducer
const kanbanReducer=(state=initialState,action) =>{
    const {type,kanban}=action

    switch (type) {
        case 'INSERT':
            return {...state,Id:[...state.Id,kanban.id],Body:[...state.Body,kanban.body],boardPosition:[...state.boardPosition,kanban.bPos]}
        case 'TAKE':
            state.boardPosition[kanban.id]=1
            return {...state,Id:state.Id,Body:[...state.Body],boardPosition:state.boardPosition}
        case 'IN PROGRESS':
            state.boardPosition[kanban.id]=2
            return {...state,Id:state.Id,Body:[...state.Body],boardPosition:state.boardPosition}
        case 'EVALUATION':
            state.boardPosition[kanban.id]=3
            return {...state,Id:state.Id,Body:[...state.Body],boardPosition:state.boardPosition}
        default:
            return state
    }
}

// 3. create store()
const middleware = applyMiddleware(thunk,logger)
const store=createStore(kanbanReducer, compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

//store.subscribe() menerima sebuah function sbg parameter
//store.subscribe(()=>console.log(store.getState()))

//store.dispatch() menerima obj literal sbg parameter
// store.dispatch({type:'INCREMENT',payload:1})

export default store