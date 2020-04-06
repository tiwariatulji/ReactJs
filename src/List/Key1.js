import React, { Component } from 'react';
import Key2 from "./Key2"
class Key1 extends Component {

    render() {
        const arr = this.props.number
        const newarr = arr.map((data)=>{
        
            return <Key2  value={data}/>
        })
        return (
            <div>
                {newarr}
            </div>
        );
    }
}

export default Key1;