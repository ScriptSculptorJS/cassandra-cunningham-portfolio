import Project from '../components/project.jsx';
import image1 from '../../public/assets/instagram-feed-practice.png';
import image2 from '../../public/assets/lets-go-project.png';
import image3 from '../../public/assets/Rhody-park.png';
import image4 from '../../public/assets/Memraze.jpg';
import image5 from '../../public/assets/annual-report-tracker-and-reminder-app.jpg'
import React from 'react';

function Projects() {
  let projectComponentArray = [];
  

  const projects = [{
    id: 1,
    image: image5,
    name: 'Annual Report Tracker & Reminder App',
    link: 'https://youtu.be/2fusCLYstFU',
    skills: 'MERN | Bootstrap | JWT Authentication & Backend Cookies | CRUD',
    description: 'Full-stack MERN app that helps small businesses track annual report deadlines and rendering reminders, featuring JWT authentication, secure cookies, nested CRUD operations, and a responsive Bootstrap UI.',
    repoLink: 'https://github.com/ScriptSculptorJS/Annual-Report-Tracker-and-Reminders-App',
  },{
    id: 2,
    image: image4,
    name: 'Memraze',
    link: 'https://youtu.be/3zuAoxVZfMk',
    skills: 'HTML5 | CSS | Bootstrap | Javascript | React | MongoDB | JWT Authentication & Backend Cookies | CRUD',
    description: 'Secure MERN app where users create profiles, add interest-based tabs, and share posts with most-recent sorting, featuring JWT authentication and full CRUD operations.',
    repoLink: 'https://github.com/ScriptSculptorJS/Memraze',
  }, {
    id: 3,
    image: image1,
    name: 'Instagram Feed Practice',
    link: 'https://scriptsculptorjs.github.io/instagram-feed-practice/',
    skills: 'HTML5 | CSS',
    description: 'Built with only HTML & CSS, replicating Instagram’s post-login feed layout with responsive design techniques inspired by a SuperSimpleDev tutorial.',
    repoLink: 'https://github.com/ScriptSculptorJS/instagram-feed-practice'
  }, {
    id: 4,
    image: image3,
    name: 'Rhododendron Park Maintenance Company Website',
    link: 'https://rhodypark.com',
    skills: 'WordPress | HTML5',
    description: "Improved a WordPress-based HOA site with custom HTML/CSS for better visuals, usability, and up-to-date content. Built a fee calculator that shifted costs to customers, saving the HOA money." 
  }, {
    id: 5,
    image: image2,
    name: "Let's GO!",
    link: 'https://scriptsculptorjs.github.io/lets-go/',
    skills: 'HTML5 | CSS | Javascript',
    description: "Fetches activity ideas via GET requests from the Bored API and stores them in localStorage, built using skills from a SuperSimpleDev course.",
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