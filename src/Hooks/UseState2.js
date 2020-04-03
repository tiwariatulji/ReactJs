import React,{useState} from 'react'

function UseState2 (){
    const [name, setname] = useState("Ravi panday");
    const [roll, setroll] = useState(102);

const handleClick =()=>{
    setname("Vibhav Panday");
    setroll(105);
}

    return(
        <React.Fragment>
          <h1>{name}</h1>
          <h1>Roll{roll}</h1>
          <button type="button" onClick={handleClick}>Click here</button>
        </React.Fragment>
    )

}

export default UseState2;