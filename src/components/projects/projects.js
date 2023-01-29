import './projects.scss';
import { list, adlist } from './list';
import { useState } from 'react';
import * as icons from 'react-icons/ai';
import * as iconss from 'react-icons/fi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Projects() {
  const [projects, setProjects] = useState(list);
  const [adprojects, setadprojects] = useState(adlist);

  const AddProject = () => {
    const porjs = [];

    for (let i = 0; i < adprojects.length; i++) {
      porjs.push(
        <Card className='CARDSS' sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={adprojects[i].imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {adprojects[i].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {adprojects[i].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"><icons.AiFillFolderOpen size={25} /></Button>
          <Button size="small"><iconss.FiExternalLink size={25} /></Button>
      </CardActions>
    </Card>
      );
    }
    return porjs;
  };

  return (
    <section className="project" id='PROJ'>
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
              <img src={project.image} alt="" className="proj project_image" />
              <div className="proj content">
                <h1 className="project__title">{project.title}</h1>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">{project.stack}</p>
                <button className="dtls">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Detailsss
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
