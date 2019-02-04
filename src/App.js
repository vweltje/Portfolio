import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
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
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=UTF-8"
            />
            <title>Portfolio | Vincent Weltje</title>
            <meta
              name="description"
              content="Vincent Weltje | Portfolio and travel blog"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
            />
          </Helmet>

          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/travels" component={Travels} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
