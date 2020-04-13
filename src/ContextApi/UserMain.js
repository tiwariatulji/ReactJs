import React, { Component } from 'react';
import User1 from "./User1"
//  export const MyContext = React.createContext();
import {Provider} from "../ContextApi/Context"
class UserMain extends Component {
    state = {
        name: "Rahul",
        value: 500
    }
    handleClick = ()=>{
        this.setState({value:this.state.value+1})
    }
    render() {
        const contextValue = {
            data : this.state,
            handleClick : this.handleClick
        }
        return (
            <Provider value={contextValue} >
                <User1/> 
            </Provider>
        );
    }
}

export default UserMain;