import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'

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
            <meta name="description" content="Portfolio | Vincent Weltje" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
            />
          </Helmet>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
