import React, { Component } from 'react';
// import {MyContext} from "../ContextApi/UserMain"
// import {Consumer} from "../ContextApi/Context"
import {MyContext} from "./Context"

class GuestApi extends Component {
    static contextType = MyContext
    render() {
        // console.log(this.context)
        const {name,value} = this.context.data  // use object Distructring
        return (
            <div>
                <h3>Guest Component</h3>
                {/* <MyContext.Consumer> */}
                {/* <Consumer>
                    {({data,handleClick})=> (
                    <div> */}
                    {/* <h4>Name:{this.context.data.name} value:{this.context.data.value} </h4>} */}
                   <h4>Name:{name} Value:{value}</h4>
                    <button onClick={this.context.handleClick}>Change Value</button>
                    {/* </div> )}
                    </Consumer>
                </MyContext.Consumer> */}
            </div>
        );
    }
}

export default GuestApi;