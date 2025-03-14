import Project from '../components/project.jsx';
import image1 from '../assets/instagram-feed-practice.png';
import image2 from '../assets/lets-go-project.png';
import React from 'react';

function Projects() {
  let projectComponentArray = [];

  const projects = [{
    id: 1,
    image: image1,
    name: 'Instagram Feed Practice',
    link: 'https://scriptsculptorjs.github.io/instagram-feed-practice/',
    skills: 'HTML5 | CSS',
    description: 'Using the skills I acquired from a course on Youtube by SuperSimpleDev to recreate the Instagram feed page directly after logging in, and making it responsive. '
  }, {
    id: 2,
    image: image2,
    name: "Let's GO!",
    link: 'https://scriptsculptorjs.github.io/lets-go/',
    skills: 'HTML5 | CSS | Javascript',
    description: "Practice using the skills I have acquired from a SuperSimpleDev course on Youtube to create an app that makes GET requests from Bored's API and stores data in localStorage."
  }]

  projects.forEach((project) => {
    projectComponentArray.push(
      <Project key={project.id} image={project.image} name={project.name} link={project.link} skills={project.skills} description={project.description} />
    ) 
  })

  return(
    <div className='projects-container'>
      {projectComponentArray}
    </div>
  )
}

export default Projects