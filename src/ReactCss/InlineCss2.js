import React, { Component } from 'react'

export default class InlineCss2 extends Component {
    state = {
        change : false
    }

    handleChange =()=>{
        this.setState({change:true})
    }
    render() {
        const btn ={
            color:"red",
            background:"green",
        }
        if(this.state.change){
         btn.background ="orange"
        }
        return (
            <div>
                <h1>Hello </h1>
                <button onClick={this.handleChange} style={btn}>Onclick</button>
            </div>
        )
    }
}
