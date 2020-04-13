
import React from 'react'

export default function Spread() {
    const arryOne = ["Atul","Vipul","Ravi"]
    const arryTwo = ["Mohit","Sumit","Ramesh"]

    const concatArry = [...arryOne,...arryTwo];
     concatArry.forEach(function(name) {
         console.log(name);
     });
    
}
