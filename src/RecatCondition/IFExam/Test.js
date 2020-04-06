import React, { Component } from 'react'
import User from './User'
import Guest from "./Guest"

export default class Test extends Component {
    render() {
        const isRegister = this.props.consumer;
        if(isRegister){
            return <User/>
        }
        return  <Guest/>
        
    }
}
