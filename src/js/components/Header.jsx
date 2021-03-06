import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ h1, h2, span, children }) => (
  <header className="container header fadeInUp">
    <span>{span}</span>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    {children}
  </header>
)

Header.defaultProps = {
  h1: '',
  h2: '',
  span: '',
  children: '',
}

Header.PropTypes = {
  h1: PropTypes.String,
  h2: PropTypes.String,
  span: PropTypes.String,
  children: PropTypes.node,
}

export default Header
