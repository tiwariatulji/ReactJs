import React, { Component } from 'react';
import Key1 from "../Key1"
class Keymain extends Component {
    render() {
    const Newvalue = [10,20,30,40,]
        return (
            <div>
                <Key1 number={Newvalue}/>
            </div>
        );
    }
}

export default Keymain;