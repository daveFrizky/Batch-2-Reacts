export function inProgress(data,index,boardPos,take) {
    if(boardPos===0){
        return(

               
                <div className="col" key={index}>
                    {data}<br/><button className="btn btn-light" onClick={()=>{take(index)}}>Take</button>
                </div>
        )
    }
    else if(boardPos===1){
        return(

            <div className="col" key={index}>
                {data}<br/><button className="btn btn-light" onClick={()=>{take(index)}}>Take</button>
            </div>
        )
    }
}
