
import React, { Component } from 'react'
import Form2 from './Form2';

export default class Form extends Component {
        state ={
            value : "",
            data : "Hello I am Atul Tiwar Jai Bhole baba"
        }
        handleAllChange =(event)=>{
            console.log(event.target.value);
            this.setState({value:event.target.value.toUpperCase().substr(0,7)}) // to uppsercase and kisi v input text decode karnek liye subtr()method ka use hota hai
        }
    render() {
        const {value,data}= this.state
        return (
            <div>
                <form>
                    <h1>controll Component</h1>
                    <input type="text"  value={value} onChange={this.handleAllChange}></input>
                    <textarea value={data}  onChange={this.handleAllChange} />
                
                </form>
                {/* <Form2/> */}
            </div>
        )
    }
}
