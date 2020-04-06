import React, { Component } from 'react';

class Array2 extends Component {
    state = {
        user : [
            {id:101,name:"Atul Tiwari",password:"255eee"},
            {id:102,name:"Vipul Tiwari",password:"255eef"},
            {id:103,name:"Sumit Tiwari",password:"255eeg"}

        ]
        
    }
    render() {
        const newArr = this.state.user.map((data)=>{
            console.log(data)
            return (
                <div>
                    <h1> id:{data.id} 
                    name:{data.name}
                    password:{data.password}
                    </h1>
                </div>

            )
        } )
        return (
            <div>
                {newArr}
            </div>
        );
    }
}

export default Array2;