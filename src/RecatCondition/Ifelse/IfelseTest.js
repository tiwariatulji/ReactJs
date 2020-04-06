import React, { Component } from 'react'
import User from "./User"
import Guest from "./Guest"
export default class IfelseTest extends Component {
    state = {
        isLoggedIn: false
    }

    clickLogin = () => {
        this.setState({ isLoggedIn: true })
    }

    clickLogout = () => {
        this.setState({ isLoggedIn: false })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn
        // if(isLoggedIn){
        //     return <User clickData ={this.clickLogout}/>
        // }else{
        //     return <Guest clickData ={this.clickLogin}/>
        // }
        return (
            <div>
                {/* {                          // ternary opertor
                isLoggedIn? <User clickData ={this.clickLogout}/> :<Guest clickData ={this.clickLogin}/>
                } */}

                {
                    (() => {         // IIFE Opertor
                        if (isLoggedIn) {
                            return <User clickData={this.clickLogout} />
                        } else {
                            return <Guest clickData={this.clickLogin} />
                        }
                    })()
                }

            </div>
        )

    }
}

