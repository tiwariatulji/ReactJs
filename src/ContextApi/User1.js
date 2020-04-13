import React, { Component } from 'react';
import GuestApi from "./GuestApi"

class User1 extends Component {
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <GuestApi/>
            </div>
        );
    }
}

export default User1;