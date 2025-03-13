import projectImage from '../assets/test-project-image.jpg';

function Project({image, name, link, description}) {
  console.log(image);

  return(
    <div className='project-container'>
      <div className='project-content'>
        <img src={image} className='project-image'/>
        <h3 className='project-name'><a href={link}>{name}</a></h3>
        <p className='project-description'>{description}</p>
      </div>
    </div>
  )
}

export default Project