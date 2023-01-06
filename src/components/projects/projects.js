import './projects.scss';
import { list, adlist } from './list';
import { useState } from 'react';
import * as icons from 'react-icons/ai';
import * as iconss from 'react-icons/fi';

export default function Projects() {
  const [projects, setProjects] = useState(list);
  const [adprojects, setadprojects] = useState(adlist);

  const AddProject = () => {
    const porjs = [];

    for (let i = 0; i < adprojects.length; i++) {
      porjs.push(
        <div className="s_projects__card" key={i}>
          <div className="icons">
            <span>
              <icons.AiFillFolderOpen size={25} />
            </span>
            <span>
              <a href={adprojects[i].link} target="_blank" rel="noreferrer">
                <iconss.FiExternalLink size={25} />
              </a>
            </span>
          </div>
          <h2 className="s_project__title">{adprojects[i].title}</h2>
          <img src={adprojects[i].image} alt="" className="s_project_image" />
          <p className="s_project__description">{adprojects[i].description}</p>
          <p className="s_project__stack">{adprojects[i].stack}</p>
        </div>
      );
    }
    return porjs;
  };

  return (
    <section className="project">
      <div className="projects p_projects">
        <h1>Projects</h1>
        <p className='projects__para'>
          Below are some of the projects I have worked on. I have had the
          opportunity to work on a variety of projects, ranging from small
          websites to large web applications. I am a team player and enjoy
          collaborating with others to bring ideas to life.
        </p>
        {projects.map((project) => {
          return (
            <div className="projects__card">
              <img src={project.image} alt="" className="project_image" />
              <div className="content">
                <h2 className="project__title">{project.title}</h2>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">{project.stack}</p>
                <button className="dtls">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Details
                  </a>
                </button>
              </div>
            </div>
          );
        })}
        <h1>Other Note Wrothy Projects</h1>
      </div>
      <div className="s_projects">{AddProject()}</div>
    </section>
  );
}
