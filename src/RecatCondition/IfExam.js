
import React, { Component } from 'react'
import { Button } from 'reactstrap';
// msg Componnet

function Message (props){
    if(props.isLoggedIn)
    return <h1>Welcome Back !!!</h1>;
    else
    return <h1>Please Login First!!!</h1>;
}
// login component
function Login (props){
    return(
        <Button onClick={props.ClcikInfo}>Login</Button>
    );
}

// logout component
function Logout (props){
    return(
        <Button onClick={props.ClcikInfo}>Logout</Button>
    );
}
export default class Ifelse extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoggedIn : false
        }
    }
    handleLogin=()=>{
        this.setState({ isLoggedIn:true});
    }
    handleLogout=()=>{
        this.setState({isLoggedIn : false});
    }
    render() {
        return (
            <div>
                <h1>It is Condition rendering </h1>
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {
                 (this.state.isLoggedIn) ? (<Logout ClcikInfo={this.handleLogout}/>) :(<Login ClcikInfo={this.handleLogin}/>)

                }
            </div>
        )
    }
}