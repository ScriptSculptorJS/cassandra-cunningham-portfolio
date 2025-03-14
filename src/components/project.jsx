function Project({image, name, link, skills, description}) {
  console.log(image);

  return(
    <div className='project-container'>
      <div className='project-content'>
        <a href={link} target='_blank'><img src={image} className='project-image'/></a>
        <a href={link} target='_blank'><h3 className='project-name'>{name}</h3></a>
        <p className='skills'><i>{skills}</i></p>
        <p className='project-description'>{description}</p>
      </div>
    </div>
  )
}

export default Project