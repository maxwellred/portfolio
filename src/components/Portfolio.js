import React, { Component } from "react";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
// import github from '../assets/github.png';
import heroku from "../assets/heroku.png";
import jquery from "../assets/jquery.png";
import webpack from "../assets/webpack.png";
import postgresql from "../assets/postgresql.png";

export default class Portfolio extends Component {
  show = event => {
    // document.querySelector()
    let target = event.target;
    console.log("HOVER", target);
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
                  href="​https://github.com/GitHubMaxwell/dockerteam"
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
          <div className="icons__list__container">
            <ul className="icons__list">
              <li className="icons__list__item">
                <a target="_blank" href="https://github.com/GitHubMaxwell">
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li className="icons__list__item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/maxwellrediker/"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li className="icons__list__item">
                <a href="mailto:maxwell.rediker@gmail.com">
                  <i className="far fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
          <div className="aboutme__container">
            <p>
              lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document without relying on meaningful content.
            </p>
          </div>
          <div className="tech__container">
            <p>Tech:</p>
            <ul className="tech__list">
              <li onMouseOver={this.show} className="tech__list__item tooltip">
                <i className="fab fa-js" />
                <p className="tooltip__text">JavaScript</p>
              </li>
              <li className="tech__list__item">
                <i className="fab fa-node-js" />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-react" />
              </li>
              <li className="tech__list__item">
                <img src={webpack} />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-sass" />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-aws" />
              </li>
              <li className="tech__list__item">
                <i className="fab fa-docker" />
              </li>
              <li className="tech__list__item">
                <img src={git} />
              </li>
              <li className="tech__list__item">
                <img src={heroku} />
              </li>
              <li className="tech__list__item">
                <img src={postgresql} />
              </li>
              <li className="tech__list__item">
                <img src={mongodb} />
              </li>
              <li className="tech__list__item">
                <img src={jquery} />
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
