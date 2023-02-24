import React, {Component} from 'react'


class Counter extends Component  {

    constructor(){
        super()
        this.state={
            Number:0
        }
    }

    Increment(){
        this.setState({
           Number:this.state.Number +1 
        })
    }

    
    render(){
        return (
            <div>
               <h1>Number {this.state.Number}</h1>
               <button onClick={()=>this.Increment()}>Increment</button>

            </div>
        )
    }
}

export default Counter;