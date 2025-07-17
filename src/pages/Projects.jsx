import Project from '../components/project.jsx';
import image1 from '../../public/assets/instagram-feed-practice.png';
import image2 from '../../public/assets/lets-go-project.png';
import image3 from '../../public/assets/Rhody-park.png';
import image4 from '../../public/assets/Memraze.jpg';
import React from 'react';

function Projects() {
  let projectComponentArray = [];

  const projects = [{
    id: 1,
    image: image4,
    name: 'Memraze',
    skills: 'HTML5 | CSS | Bootstrap | Javascript | React | CRUD | Axios | JWT Authentication & Backend Cookies',
    description: 'Figured out how to use JWT for authenticating users logging into the app to begin creating a profile that showcases their interests and hobbies in tabs and each interest/hobby can have posts sorted from most recent to oldest. This is really showcasing CRUD for their interests/hobbies.',
    repoLink: 'https://github.com/ScriptSculptorJS/Memraze'
  }, {
    id: 2,
    image: image1,
    name: 'Instagram Feed Practice',
    link: 'https://scriptsculptorjs.github.io/instagram-feed-practice/',
    skills: 'HTML5 | CSS',
    description: 'Using the skills I acquired from a course on Youtube by SuperSimpleDev to recreate the Instagram feed page directly after logging in, and making it responsive.',
    repoLink: 'https://github.com/ScriptSculptorJS/instagram-feed-practice' 
  }, {
    id: 3,
    image: image3,
    name: 'Rhododendron Park Maintenance Company Website',
    link: 'https://rhodypark.com',
    skills: 'WordPress | HTML5',
    description: "Utilizing WordPress to create & edit content based on the HOA Trustees' vision and needs, and remove outdated information. Make the website more visually appealing and user friendly." 
  }, {
    id: 4,
    image: image2,
    name: "Let's GO!",
    link: 'https://scriptsculptorjs.github.io/lets-go/',
    skills: 'HTML5 | CSS | Javascript',
    description: "Practice using the skills I have acquired from a SuperSimpleDev course on Youtube to create an app that makes GET requests from Bored's API and stores data in localStorage.",
    repoLink: 'https://github.com/ScriptSculptorJS/lets-go'
  }]

  projects.forEach((project) => {
    projectComponentArray.push(
      <Project key={project.id} id={project.id} image={project.image} name={project.name} link={project.link} skills={project.skills} description={project.description} repoLink={project.repoLink} />
    ) 
  })

  return(
    <div className='projects-container'>
      {projectComponentArray}
    </div>
  )
}

export default Projects