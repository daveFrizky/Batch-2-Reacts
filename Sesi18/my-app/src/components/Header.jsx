import React,{ Component  } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            username: 'user ',
            counter:1
        }
    }

    changeValue=() => {
        this.setState({
            counter:this.state.counter+1,
            username:this.state.counter+'x changed'
        })
    }

    render(){
        return (
            <>
            <h3>
                Hallo {this.state.username} 
            </h3>
            <br></br>{this.props.input}{this.props.batch}
            {/* <button onClick={() => {this.setState({username:'changed'})}
                            }>change Username</button> */}
            <button onClick={this.changeValue} >change Username</button>
            </>
        )
    }
}

export default Header