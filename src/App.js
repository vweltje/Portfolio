import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import Travels from './pages/Travels'
import Contact from './pages/Contact'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/travels/:slug" component={Travels} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
