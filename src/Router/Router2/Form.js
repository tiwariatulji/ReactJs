import React, { Component } from 'react'
import "../Router2/Form.css"
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            mobile: "",
            message: "",
        }

    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    handlesubmit = (event) => {
        // alert (`my name is ${this.state.fullName}. 
        //  My email id is ${this.state.email}
        //  My mobile number is ${this.state.mobile}.
        //  My message to your company is ${this.state.message}
        //  `);
        alert(JSON.stringify(this.state));
        console.log(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        const { fullName, mobile, email, message } = this.state;
        return (
            <div className="Form">
                <form onSubmit={this.handlesubmit}>

                    <label>FullName</label>
                    <input type="text" name="fullName" value={fullName} onChange={this.handleChange} />


                    <label>Mobile</label>
                    <input type="number" name="mobile" value={mobile} onChange={this.handleChange} />

                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={this.handleChange} />

                    <label>Message</label>
                    <textarea name="message" value={message} onChange={this.handleChange} />

                    <input type="submit" value="send" />

                </form>
            </div>
        )
    }
}
