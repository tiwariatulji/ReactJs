import React, { Component } from 'react';
import InlineCss2 from "../ReactCss/InlineCss2"
class InlineCss extends Component {
    render() {
        // const btnStyle = {                    // inline Style attribute
        //     color:"Blue",
        //     background : "Orange"
        // }
       const txts = {
           color : "blue"
       }
       const txrtc ={
           fontSize : "80px"
       }

        return (
            <div>
               {/* <button style={btnStyle}>Button</button>  */}
               <h1 style={{...txts , ...txrtc}}>Hello</h1>
               <InlineCss2/>
            </div>
        );
    }
}

export default InlineCss;