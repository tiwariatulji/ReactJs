import React, { Component } from 'react';
import ReduxProfile from './ReduxProfile';
import ReduxHome from "./ReduxHome"
class Main extends Component {
    state = {
        name: "Atul Tiwari"
    }
    chnageName=(name)=>{
        this.setState({name:name})
    }
    render() {
        return (
            <div>
                <ReduxHome ChangeState={(name)=>this.chnageName(name)}/>
                <ReduxProfile name={this.state.name}/>
                <h1>I am from App :{this.state.name}</h1>

            </div>
        );
    }
}

export default Main;