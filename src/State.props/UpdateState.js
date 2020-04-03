import React, { Component } from 'react'

export default class UpdateState extends Component {
    constructor(props) {
        super(props);
         this.state ={
             name:"Atul",
             roll: this.props.roll
         }
         }
         handleClick=()=>{
             console.log("Click Button" ,this)
            this.setState({name:"jai",roll:200});
    }
    render() {
        return (
            <div>
                <h1>hello {this.state.name} your roll No is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

