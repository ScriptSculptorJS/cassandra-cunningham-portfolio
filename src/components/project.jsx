function Project({id, image, name, link, skills, description, repoLink }) {
  console.log(image);

  function highlightedProject(id) {
    if (id === 1) {
      return 'project-content glow'
    } else {
      return 'project-content'
    }
  }

  function productionLink(link) {
    if (link) {
      return [
        <a href={link} target='_blank'><img src={image} className='project-image'/></a>,
        <a href={link} target='_blank'><h3 className='project-name'>{name}</h3></a>
      ]
    } else {
      return [
        <img src={image} className='project-image'/>,
        <h3 className='project-name'>{name}</h3>
      ]
    }
  }

  function RepoLink(repoLink) {
    if (repoLink) {
      return <a href={repoLink} target='_blank'><button className='repo-button'>Public Repo</button></a>
    } else {
      return;
    }
  }

  return(
    <div className='project-container'>
      <div className={highlightedProject(id)}>
        {productionLink(link)}
        <p className='skills'><i>{skills}</i></p>
        <p className='project-description'>{description}</p>
        {RepoLink(repoLink)}
      </div>
    </div>
  )
}

export default Project