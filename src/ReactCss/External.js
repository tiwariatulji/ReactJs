import React, { Component } from 'react'
// import "../ReactCss/React.css" 
import styles from "../ReactCss/External.module.css"
import pic from "../Image/atul.JPG"
export default class External extends Component {
    render() {
        return (
            <div className={styles.text}>
             <h1 >hello </h1>    
             {/* <img src={process.env.PUBLIC_URL + "/image/Vipul.JPG"} alt="mypic"/> */} 
             <img src={pic} alt ="myPic"/>
            </div>
        )
    }
}
