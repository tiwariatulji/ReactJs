import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Atul Tiwari</h1>
                <button onClick={this.props.clickData}>LogOut</button>
            </div>
        )
    }
}
