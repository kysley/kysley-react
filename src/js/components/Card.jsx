import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ project, className, size }) => (
  <div
    style={{ height: 613 }}
    {...className}
  >
    <Link
      to={`/project/${project.slug}`}
      key={project.name}
      style={{
        backgroundImage: `url(${require(`img/${project.slug}/feature-${size}.jpg`)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <h3>{project.name}</h3>
        <h4>{project.description}</h4>
      </div>
    </Link>
  </div>
)

Card.PropTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.shape({
    className: PropTypes.string,
  }).isRequired,
  size: PropTypes.string.isRequired,
}

export default Card
