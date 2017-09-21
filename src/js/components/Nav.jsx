import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () =>
  (<nav>
    <section className="container">
      <Link to="/">
        {/*<div className="top-nav-wrapper fixed">
          <div className="fadeInUp d-1 single">
            <span>E</span>
            <span>V</span>
            <span>A</span>
            <span>N</span>
            <div className="filler-rect" />
          </div>
          <div className="fadeInUp d-1 spread spread-1">
            <span>K</span>
            <span>Y</span>
            <span>S</span>
            <span>L</span>
            <span>E</span>
            <span>Y</span>
            <div className="filler-rect" />
          </div>
          <div className="fadeInUp d-1 spread spread-2">
            <div className="filler-rect" />
          </div>
        </div>*/ }
      </Link>
      {/* <div className="left-nav-carret fadeInUp d-2"></div> */}
      <div className="nav-rotate fadeInUp d-1 link-border">
        <NavLink to="/" exact>Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {/* <div className="right-nav-logo fadeIn d-8">
        <img className="logo" src="src/img/e-k-white.svg"/>
      </div> */}
    </section>
  </nav>)

export default Nav
