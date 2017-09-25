import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About | Evan Kysley'
  }

  render() {
    return (
      <div>
        <section className="container fadeInUp header -about">
          <div className="col-6-of-12">
            <img src={require('img/e-k-white.svg')} alt="" />
          </div>
          <div className="col-4-of-12">
            <h1 className="spotlight spotlight__red">Hey!</h1>
            <h2>Thanks for stopping by. Here is a little more about me,</h2>
          </div>
        </section>
        <section className="container fadeInUp profile d-2">
          <div className="push-4 col-7-of-12 link-border">
            <p>
              I am a designer/developer, but more importantly a creater of beautiful, gripping user
              experiences.
            </p>
            <p>
              Recently I've been using nothing but <span className="c-react">React </span>
              (and the amazing stack that follows)...
              With further development experience using <span className="c-vue">Vue, </span>
              <span className="c-angular">Angular1,</span> and good ol' static html+js.
            </p>
            <p>
              Over the past 3 years in this industry, I have picked up on countless principles
              (both design and development) that have brought me to where I am today.
            </p>
            <p>
              I'm always looking to work on fun projects. Feel free to{' '}
              <Link to="/contact">reach out</Link> with work inquiries, side
              projects, or just to say hello!
            </p>
          </div>
        </section>
      </div>
    )
  }
}
