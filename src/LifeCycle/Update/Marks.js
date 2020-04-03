
import React, { Component } from 'react'

export default class Marks extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            Mroll: this.props.roll
        }
    }
     static getDerivedStateFromProps(props,state){
      console.log("Get Derived Satte from props")
      console.log(props);
      console.log(state);
      if(props.roll !== state.Mroll){
          return {Mroll:props.roll}
      }
      return null;
     }
    render() {
        console.log("Marks renderd");
        return (
            <div>
              <h1>Hello {this.state.Mroll}</h1> 
            </div>
        )
    }
}
