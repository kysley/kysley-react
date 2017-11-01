import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <section className="container">
      <div className="nav-rotate fadeInUp d-1 link-border">
        <NavLink to="/" exact>Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="nav-rotate fadeInUp d-1 link-border">
        <a className="github" href="https://github.com/kysley" rel="noopener noreferrer" target="_blank">GitHub</a>
        <a className="linkedin" href="https://www.linkedin.com/in/evankysley/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
      </div>
    </section>
  </nav>
)

export default Nav
