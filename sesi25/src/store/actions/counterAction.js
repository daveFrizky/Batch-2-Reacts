export const incrementCounter=() =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'INCREMENT',payload:1})
        },100)
    }
}

//export default incrementCounter