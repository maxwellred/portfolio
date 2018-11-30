import React, { Component } from "react";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import heroku from "../assets/heroku.png";
import jquery from "../assets/jquery.png";
import webpack from "../assets/webpack.png";
import postgresql from "../assets/postgresql.png";

export default class Portfolio extends Component {
  show = event => {
    // document.querySelector()
    // let target = event.target;
    // console.log("HOVER", target);
  };
  // hide = event => {

  // }
  render() {
    return (
      <div className="portfolio__flex__container">
        <main className="portfolio__grid__container">
          <h1 className="portfolio__header">Max Rediker</h1>
          <h2 className="portfolio__header portfolio--header--red">
            Full Stack Developer
          </h2>
          <b className="grid__line grid__line__bottom" />
          <div className="projects__list__container">
            <p>Projects:</p>
            <ul className="projects__list">
              <li className="projects__list__item">
                <a
                  target="_blank"
                  href="https://github.com/githubmaxwell/dockerteam"
                >
                  CF Docker
                </a>
              </li>
              <li className="projects__list__item">
                <a
                  target="_blank"
                  href="https://github.com/code-commando/dashboard-electron"
                >
                  CF Dashboard
                </a>
              </li>
              <li className="projects__list__item">
                <a
                  target="_blank"
                  href="https://github.com/GitHubMaxwell?tab=repositories"
                >
                  More...
                </a>
              </li>
            </ul>
          </div>
          <div className="contact__list__container">
            <ul className="contact__list">
              <li className="contact__list__item">
                <a target="_blank" href="https://github.com/GitHubMaxwell">
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li className="contact__list__item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/maxwellrediker/"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li className="contact__list__item">
                <a href="mailto:maxwell.rediker@gmail.com">
                  <i className="far fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
          <div className="about__container">
            <p>
              Fullstack JavaScript developer with a service and sales
              background. Highly motivated to work on skilled teams to build and
              support intuitive applications that solve hard business and client
              facing issues.
            </p>
          </div>
          <div className="tech-icons__container">
            <p>Tech:</p>
            <ul className="tech-icons__list">
              <li
                onMouseOver={this.show}
                className="tech-icons__list__item tooltip"
              >
                <i className="fab fa-js" />
                <p className="tooltip__text">JavaScript</p>
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-node-js" />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-react" />
              </li>
              <li className="tech-icons__list__item">
                <img src={webpack} />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-sass" />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-aws" />
              </li>
              <li className="tech-icons__list__item">
                <i className="fab fa-docker" />
              </li>
              <li className="tech-icons__list__item">
                <img src={git} />
              </li>
              <li className="tech-icons__list__item">
                <img src={heroku} />
              </li>
              <li className="tech-icons__list__item">
                <img src={postgresql} />
              </li>
              <li className="tech-icons__list__item">
                <img src={mongodb} />
              </li>
              <li className="tech-icons__list__item">
                <img src={jquery} />
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
