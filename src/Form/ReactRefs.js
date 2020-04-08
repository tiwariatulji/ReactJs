
import React, { Component } from 'react'

export default class ReactRefs extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value:""
        }
        this.textInput = React.createRef();
        
    }
    handleSubmit =(e)=>{
        console.log(this.textInput.current.value);
        e.preventDefault();
        this.setState({value:this.textInput.current.value})
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h2>You typed:{this.state.value}</h2>
                    Name:<input type="text" ref={this.textInput}/>
                    <input type="submit" value="submit"/>
                </form>
            </React.Fragment>
        )
    }
}

// Auto focus With ReactRefs

// import React, { Component } from 'react';

// class ReactRefs extends Component {
//     constructor(props) {
//         super(props);
//         /// creating ref

//         this.textInput = React.createRef();
        
//     }
//     componentDidMount() {
//         // console.log(this.textInput.current);
//         this.textInput.current.focus();
//     }
    
//     render() {
//         return (
//             <from>
//                 Name: <input type='text'/>
//                 <br/><br/>
//                 Password : <input type="text" ref={this.textInput}/>
//                 <br/><br/>
//                 Address : <input type="text"/>
//             </from>
//         );
//     }
// }

// export default ReactRefs;