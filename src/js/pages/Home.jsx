import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import allProjects, { moreProjects } from '../utils/projects'

export default class Index extends React.Component {
  componentDidMount() {
    document.title = 'Evan Kysley'
  }

  render() {
    return (
      <div>
        <Header
          h1="Designer and Developer from the GTA"
          h2="I am a Software Engineering Student, Designer, and Developer. Currently creating beautiful web experiences."
          span="Evan Kysley"
        />
        <section className="container">
          <h3 className="col-1-of-1 headline fadeIn d-2">Selected Works</h3>
        </section>
        <section className="container projects fadeInUp d-2">
          { allProjects.map((project) => {
            const className = {
              className: project.properties !== null
                ? ['card', project.properties.className].join(' ') + project.slug
                : `card ${project.slug}`,
            }
            const size = project.properties !== null ? 'large' : 'small'
            return (
              <Card
                project={project}
                className={className}
                size={size}
                key={project.order}
              />
            )
          })}
        </section>
      </div>
    )
  }
}
