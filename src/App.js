import React, { Component } from 'react'
import el from "./Component/Jsx"
import UpdateState from './State.props/UpdateState'
import Argument from "./PassArguInEve/Argument.js"
import Student from './LifeCycle/Update/Student'
import UseState2 from './Hooks/UseState2'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* {el} */}
        {/* <UpdateState name="Atul Tiwari" roll = "201"/> */}
        {/* <UpdateState>I am your Child</UpdateState> */}
        {/* <UpdateState roll="201"/> */}
        <Student/>
        {/* <Argument/> */}
        <UseState2/>
      </div>
    )
  }
}

