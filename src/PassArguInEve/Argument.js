import React, { Component } from 'react'
class Argument extends Component{
    // Satet Without construtor
    state = {
        name: "Rahul",
        id :1
    }
    // Event handler Arrow Function
handleClick =(id,e)=>{
    console.log(id) 
    console.log(e)
}
// handleClickArg = (e)=>{
//   this.handleClick (this.state.id,e)
// }
render() {
    return (
        <div>
            <h1>Hello {this.state.name}</h1>
            <button onClick={this.handleClick.bind(this,this.state.id)}>click Me</button>
        </div>
    )
} }

export default Argument;