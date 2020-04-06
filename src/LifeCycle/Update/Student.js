
import React, { Component } from 'react'
import Marks from "./Marks"
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Roll:101,
        }
        
    }
    handleClick = ()=>{
        console.log("Button Click");
        this.setState({Roll:1112});
    }
    render() {
        console.log("Student renderd-")
        return (
            <div>
              <Marks roll={this.state.Roll}/>  
              <button onClick ={this.handleClick}>Change State</button>
            </div>
        )
    }
}
