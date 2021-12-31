import React,{ Component  } from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state= {
            name: "Trying Reacts"
        }
    }

    render(){
        return (
            <h3>
                Hallo {this.state.name}
            </h3>
        )
    }
}

export default Header