import projectImage from '../assets/test-project-image.jpg';

function Project() {

  return(
    <div className='project-container'>
      <div className='project-content'>
        <img src={projectImage} className='project-image'/>
        <h3 className='project-name'>Project Name</h3>
        <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default Project