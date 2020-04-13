import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Heade from './Heade'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import PageNotFond from './PageNotFond'
import Home from "./Home"


export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Heade/>
                  <div>
    
                      <Switch>
                      <Route exact path= "/" component={Home}/>
                      <Route path= "/about" component={About}/>
                      <Route path= "/contact" component={Contact}/>
                      <Route path= "/services" component={Services}/>
                      <Route component={PageNotFond}/>
                      </Switch>
                  </div>
               
                </BrowserRouter>
            </div>
        )
    }
}






