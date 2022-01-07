import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {insertAction,takeAction,evaluateAction,doneAction} from '../store/actions/takeAction'


function Kanban() {
    const dispatch=useDispatch()
    const [counter,setCounter]=useState(0)
    const [input,setInput]=useState()
    const body=useSelector(state=>state.Body)
    const boardPosition=useSelector(state=>state.boardPosition)
    function insert(input) {
        dispatch(insertAction(counter,input,0))
        setInput('')
        setCounter(counter+1)
    }
    
    function onButtonHandler(bPos,callback,str) {
        return(<> {body.map((data,index)=>(<> {boardPosition[index]===bPos && ( 
            <div className="card "style={{backgroundColor:'aliceblue'}}>
                <div className="card-body">
                    <h5 key={index}>{data}</h5> 
                    {bPos !==3 && (<button className="btn btn-success" onClick={()=>{dispatch(callback(index))}}>{str}</button>)}
                </div>
            </div>
            )}
            </>))
        }</>)
    }
   
    return(
        <>
           
            <div className='container-sm text-center shadow p-3 mb-5 bg-white rounded w-25 mt-3'>
                <h4>Add Task</h4>
                <div className="form-floating mt-3 ">
                        <input id='tb'      
                                className='tb'
                                type="text"
                                name='input' 
                                placeholder="New Task"
                                value={input||''}
                                onChange={(e)=>{setInput(e.target.value)}}
                        />
                </div>
                <div className="container ">
                    <button type="submit" className="btn btn-primary mx-5 mt-2" onClick={()=>{insert(input)}}>Insert</button>  
                </div>
            </div>
            
            <div className="container text-center shadow p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col">
                        <div className="card m-1" style={{backgroundColor:'lightgrey'}}>
                            <div class="card-header" >
                                Backlog
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-1" style={{backgroundColor:'lightyellow'}}>
                            <div className="card-header" >
                                In Progress
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-1" style={{backgroundColor:'lightblue'}}>
                            <div className="card-header">
                                Evaluating
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-1" style={{backgroundColor:'lightgreen'}}>
                            <div className="card-header" >
                                Done
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col ">
                        <div className="container ">
                            {onButtonHandler(0,takeAction,'Take')}
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            {onButtonHandler(1,evaluateAction,'Evaluate')}
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            {onButtonHandler(2,doneAction,'Done')}
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            {onButtonHandler(3,doneAction,'Done')}
                        </div>
                    </div>
                </div>

            </div> 
               
        </>
    )
    
}
export default Kanban