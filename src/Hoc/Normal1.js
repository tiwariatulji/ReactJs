import React, { Component } from 'react';
import Hoc from "./Hoc"
class Normal1 extends Component {
    // state = {
    //     ganShot : 0,
    // }
    // changeGunShot=()=>{
    //     this.setState({ganShot:this.state.ganShot+1})
    // }
    render() {
        return (
            <div>
                {/* <h1 onMouseOver={this.changeGunShot}> Shonam {this.props.gunName}GunShot :{this.state.ganShot}</h1> */}
                <h1 onMouseOver={this.props.gunClick}> Shonam {this.props.gunName}GunShot :{this.props.gunState}</h1>
                
            </div>
        );
    }
}

export default Hoc(Normal1,30);