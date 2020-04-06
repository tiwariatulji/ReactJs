import React,{useState,useEffect} from 'react'

function UseEffect() {

    const [count, setcount] = useState(0);

const handleIncrement =()=>{
    setcount(count+1)
}

useEffect(()=>{
    console.log("use Effect")
})

    return(
        <React.Fragment>
            <h1>Count:{count}</h1>
            <button type="button" onClick={handleIncrement}>Click here</button>
        </React.Fragment>
    )
    
}
export default UseEffect;
