import React, { Component } from 'react'

export default class Form2 extends Component {
    state = {
        name: "Hello inddi",
        password: "hell india"
    }

    handleChange = (event) => {
        console.log([event.target.name])
        this.setState({ [event.target.name]: event.target.value })
        // const value = event.target.name === "password" ? event.target.value.toUpperCase().substr(0,10) : event.target.value
        // this.setState({[event.target.name]  : value})   // form controll
    }
      handleSubmit =(event)=>{
          console.log(event.target[0].value)
          event.preventDefault();
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        password : <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br /> <input type="submit" value="submit" />



                </form>
            </div>
        )
    }
}
