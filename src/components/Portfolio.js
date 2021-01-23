import React from "react";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import heroku from "../assets/heroku.png";
import jquery from "../assets/jquery.png";
import webpack from "../assets/webpack.png";
import postgresql from "../assets/postgresql.png";

export default function Portfolio() {
  return (
    <div className="portfolio__flex__container">
      <main className="portfolio__grid__container">
        <h1 className="portfolio__header">Max Rediker</h1>
        <h2 className="portfolio__header portfolio--header--red">
          Full-Stack Developer
        </h2>
        <div className="projects__list__container">
          <p className="subheading">Projects:</p>
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
                href="https://github.com/maxwellred?tab=repositories"
              >
                More...
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__list__container">
          <p className="subheading">Contact:</p>
          <ul className="contact__list">
            <li className="contact__list__item">
              <a target="_blank" href="https://github.com/maxwellred">
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
            Hi! I'm Max and I am a Full-Stack Developer. MERN stack is my bread
            and butter but like most developers, I'm always learning new
            technologies and trying new things. I enjoy spending my free time
            going to meetups, hackathons, and collaborating with others to build
            interesting and challenging projects. Lets connect!
          </p>
        </div>
        <div className="tech-icons__container">
          <p className="subheading">Tech:</p>
          <ul className="tech-icons__list">
            <li className="tech-icons__list__item tooltip" title="JavaScript">
              <i className="fab fa-js" />
            </li>
            <li className="tech-icons__list__item" title="Node">
              <i className="fab fa-node-js" />
            </li>
            <li className="tech-icons__list__item" title="React">
              <i className="fab fa-react" />
            </li>
            <li className="tech-icons__list__item" title="Webpack">
              <img className="color" src={webpack} />
            </li>
            <li className="tech-icons__list__item" title="HTML5">
              <i className="fab fa-html5" />
            </li>
            <li className="tech-icons__list__item" title="CSS3">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="tech-icons__list__item" title="Sass">
              <i className="fab fa-sass" />
            </li>
            <li className="tech-icons__list__item" title="Git">
              <img src={git} />
            </li>
            <li className="tech-icons__list__item" title="Heroku">
              <img src={heroku} />
            </li>
            <li className="tech-icons__list__item" title="PostgreSQL">
              <img src={postgresql} />
            </li>
            <li className="tech-icons__list__item" title="MongoDB">
              <img className="color" src={mongodb} />
            </li>
            <li className="tech-icons__list__item" title="jQuery">
              <img src={jquery} />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
