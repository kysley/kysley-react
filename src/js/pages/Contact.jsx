import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'Contact | Evan Kysley'
  }

  render() {
    return (
      <div>
        <section className="container fadeInUp header -contact">
          <div className="col-6-of-12">
            <img src={require('img/e-k-white.svg')} alt="" />
          </div>
          <div className="col-4-of-12">
            <h1 className="spotlight spotlight__purple">Let's Chat =)</h1>
            <h2>Feel free to reach out! Links other than my GitHub and LinkedIn: </h2>
          </div>
        </section>
        <section className="container fadeInUp contact d-2">
          <div className="push-4 col-7-of-12 link-border">
            <a href="mailto:evan@kysley.com?subject=Hey%20Ev,%20wanted%20to%20reach%20out--">
              evan@kysley.com
            </a>
            <a href="https://dribbble.com/evankysley">
             dribbble
            </a>
            <a href="https://www.instagram.com/evankysley/">
              instagram
            </a>
          </div>
        </section>
      </div>
    )
  }
}
