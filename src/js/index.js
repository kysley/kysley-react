import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from '../styles/app.css'

import Nav from './components/Nav'
// import Footer from './components/Footer'
import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Client from './pages/Client'
// import PageNotFound from './pages/PageNotFound'

ReactDOM.render((
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))
