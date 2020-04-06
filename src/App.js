import React, { Component } from 'react'
import el from "./Component/Jsx"
import UpdateState from './State.props/UpdateState'
import Argument from "./PassArguInEve/Argument.js"
import Student from './LifeCycle/Update/Student'
import UseEffect from "./Hooks/UseEffect"
import UseState2 from './Hooks/UseState2'
import Test from './RecatCondition/IFExam/Test'
import UserMain from './RecatCondition/Logical/UserMain'
import IfelseTest from "./RecatCondition/Ifelse/IfelseTest"
import Array from "./List/Array.js/Array"
import Keymain from './List/Array.js/Keymain'
import InlineCss from './ReactCss/InlineCss'
import InlineCss2 from "./ReactCss/InlineCss2"
import External from './ReactCss/External'

export default class App extends Component {
  
  render() {
    return (
      <div>
        {/* {el} */}
        {/* <UpdateState name="Atul Tiwari" roll = "201"/> */}
        {/* <UpdateState>I am your Child</UpdateState> */}
        {/* <UpdateState roll="201"/> */}
        {/* <Student/> */}
        {/* <Argument/> */}
        {/* <UseState2/> */}
        {/* <UseEffect/> */}
        {/* <Test consumer={false}/> */}
        {/* <UserMain Primeuser={true}/> */}
        {/* <IfelseTest/> */}
        {/* <Array/> */}
        {/* <Keymain/> */}
        {/* <InlineCss/> */}
        <InlineCss2/>
        <External/>
      </div>
    )
  }
}

 
