export const insertAction=(id,body,bPos) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'INSERT',kanban:{id:id,body:body,bPos:bPos}})
        },1)
    }
}

export const takeAction=(id) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'TAKE',kanban:{id:id}})
        },1)
    }
}

export const evaluateAction=(id) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'IN PROGRESS',kanban:{id:id}})
        },1)
    }
}

export const doneAction=(id) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'EVALUATION',kanban:{id:id}})
        },1)
    }
}