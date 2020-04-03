// import React from 'react'

// const UpdateState =(props)=>{
//     return(
//          <div>
//              <h1>Hello {props.name}</h1>
//              <h1>Your roll no is {props.roll}</h1>
//           </div>
//     )
// }

// export default UpdateState;

import React, { Component } from 'react'

export default class UpdateState extends Component {
    render() {
        return (
            <div>
                {/* <h1>Hello {this.props.name} Your Roll {this.props.roll}</h1> */}
                {/* <h1>Hello {this.props.children}</h1>   */}    Jsx Children
            </div>
        )
    }
}