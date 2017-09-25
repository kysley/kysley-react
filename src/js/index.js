import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from '../styles/app.css'

import Nav from './components/Nav'
// import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import PageNotFound from './pages/PageNotFound'

ReactDOM.render((
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:slug" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))
