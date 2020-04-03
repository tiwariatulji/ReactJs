import React,{useState} from 'react'

function UseState (){

const nameStateVariable = useState("Rahul"); // use state pass two value in arry one current value and second function
// const [name, setname] = useState("Atul")
const name = nameStateVariable[0];
const setName = nameStateVariable[1];

 const handleClick =()=>{
    setName("Atul TIwari")
}

return(
    <React.Fragment>
     {/* <h1>{nameStateVariable[0]}</h1> */}
     <h1>{name}</h1>
     <button type="button" onClick={handleClick}>Click here</button>
    </React.Fragment>
)

}
export default UseState;