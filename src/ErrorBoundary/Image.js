import React, { Component } from 'react';
class Image extends Component {
    render() {
        if(this.props.term === "NoImage"){
             throw new Error("Image is not Found")
        }
        return <img src={this.props.term} alt= "My Pic"   width= "300px"/>
            
        
    }
}

export default Image;