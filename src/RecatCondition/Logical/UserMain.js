import React, { Component } from 'react'
import User1 from "./User1"
export default class UserMain extends Component {
    render() {

        const Primeuser = this.props.Primeuser
        return (
            <div>
                <h1>Welocme User</h1>
                {Primeuser && <User1/>}
            </div>
        )
    }
}
