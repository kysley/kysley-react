import React from 'react'
import PropTypes from 'prop-types'
// import SVG from 'react-svg-inline'

import Detail from 'components/Detail'
// import PrevNext from 'components/PrevNext'
import allProjects from 'utils/projects'
// import PageNotFound from '../pages/PageNotFound'

export default class Project extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  state = {
    slug: this.props.match.params.slug,
    project: {},
    component: () => null,
    name: '',
    description: '',
    duration: '',
    location: '',
    scope: '',
    stack: '',
    website: '',
    isLoading: 'fadeInUp',
  }

  componentWillMount() {
    this.updateProject(this.props.match.params.slug)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: 'fadeOutDown' })
    setTimeout(() => this.updateProject(nextProps.match.params.slug), 500)
  }

  updateProject = (slug) => {
    const project = allProjects.find(c => c.slug === slug)

    if (!project) {
      return this.setState({ project })
    }

    this.setState({
      component: project.loadComponent,
      name: project.name,
      order: project.order,
      logo: project.logo,
      description: project.description,
      duration: project.duration,
      location: project.location,
      scope: project.scope,
      stack: project.stack,
      website: project.website,
      appstore: project.appstore,
      playstore: project.playstore,
      isLoading: 'fadeInUp',
    })

    document.title = `${project.name} | Evan Kysley`
  }

  renderProject = () => {
    const {
      logo,
      duration,
      location,
      scope,
      stack,
      website,
      isLoading,
    } = this.state

    return (
      <div className={isLoading}>
        <section className="project-cover container">
          <img src={logo} alt="Tempest Feature" />
        </section>
        <div className="project-overview">
          <section className="container">
            <div className="col-7-of-12 overview">
              <h3>Overview</h3>
              <p>{this.state.description}</p>
            </div>
            <div className="col-4-of-12 push-1-of-12 details">
              <h3>Details</h3>
              <ul>
                {duration && <Detail title="Duration" value={duration} text />}
                {location && <Detail title="Location" value={location} text />}
                {scope && <Detail title="Scope" value={scope} text />}
                {stack && <Detail title="Stack" value={stack} text />}
                {website && <Detail title="Website" value={website} link />}
              </ul>
            </div>
          </section>
        </div>
        <div>
          {/*{this.state.component()}*/}
        </div>
        {/*<PrevNext allProjects={allProjects} projectId={this.state.order} />*/}
      </div>
    )
  }

  render() {
    return this.state.project ? this.renderProject() : <PageNotFound />
  }
}
