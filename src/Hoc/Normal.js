import React, { Component } from 'react';
import Normal1 from './Normal1';
import Hoc from "./Hoc"
class Normal extends Component {
    // state = {
    //     ganShot : 0,
    // }
    // changeGunShot=()=>{
    //     this.setState({ganShot:this.state.ganShot+1})
    // }
    render() {
        return (
            <div>
                {/* <h1 onMouseOver={this.changeGunShot}> Rahul  {this.props.gunName}GunShot :{this.state.ganShot}</h1> */}
                <h1 onMouseOver={this.props.gunClick}>
                     Rahul  {this.props.gunName} GunShot :{this.props.gunState} </h1>
              
                <Normal1/>
            </div>
        );
    }
}

export default Hoc(Normal, 20);