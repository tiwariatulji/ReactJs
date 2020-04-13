import React, { Component } from 'react';
import LiftUser from "./LiftUser"
import LiftGuest from "./LiftGuest"

class Lifting extends Component {
    state = {
        name: "rahul",
        value :20
    }
    render() {
        return (
            <div>
                <LiftUser name={this.state.name}/>
                <LiftGuest value={this.state.value}/>
            </div>
        );
    }
}

export default Lifting;