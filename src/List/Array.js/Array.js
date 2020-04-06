import React, { Component } from 'react';
import Array2 from "./Array2"
class Array extends Component {
    render() {
        const myNum = [10,20,30,40,]
        // const newArr = myNum.map( (num)=>{
        //     console.log("Num = ",num)
        // return <li>{num*2}</li>
        // }    );
        // console.log("oldArry= ",myNum);
        // console.log(newArr);
        return (
            <ul>
              {myNum.map((num)=>{
                  return <li>{num}</li> 
                  
              })}
              <Array2/>
            </ul>
        );
    }
}

export default Array;