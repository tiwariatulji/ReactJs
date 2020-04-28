import React from 'react'
import Menu from './Menu'
import About from '../Router2/About'
import Contact from "../Router2/Contact"
import{ BrowserRouter, Route, Switch,Link} from "react-router-dom"
export default function RouterMain() {
    return (
        <BrowserRouter>
        <div>
            <Menu/>
            <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            
            </Switch>
        </div>
        </BrowserRouter>
    )
}
const Home =()=>{
    return(
        <div className="About">
            <h1>It Is Home page</h1>
            
        </div>
    )
}
