import React, { Component } from 'react'

export default class props extends Component {
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>Hello{this.props.name}</p>
                <p>Hello{this.props.id}</p>
            </div>
        )
    }
}
 
props.defaultProps={
    name:"Atul",
    id:202
} 