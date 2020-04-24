import React, { Component } from 'react';

class ReduxHome extends Component {
       state = {
           homeName: "Vipul Tiwari"
       }
    render() {
        return (
            <div>
                <button onClick={()=>this.props.ChangeState(this.state.homeName)} >ChnageName</button>
            </div>
        );
    }
}

export default ReduxHome;