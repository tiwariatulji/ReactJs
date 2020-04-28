import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:this.props.name,
            count:this.props.count
        }
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick (){
        let count = this.state.count;
        let name = this.state.name
        if(count===1){
            name="Vibhav"
        }
        if(count===2){
            name="rohit"
        }
        if(count===3){
            name="Mahes"
        }
        this.setState({count: ++count })
        this.setState({name:name})
    }
    render() {
        console.log()
        return (
            <div>
                <h1>State and props</h1>
                <h2>Name:{this.state.name}</h2>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

// Test.defaultProps={
//     name:"AtulTiwari",
//     count :0
// }