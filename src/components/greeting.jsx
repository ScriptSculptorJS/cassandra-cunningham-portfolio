function Greeting() {

  return(
    <div className='greeting-container'>
      <div className='greeting-content'>
        <h1 className='hello'>
          Hello there,
        </h1>
        <h1 className='hello-name'>
          I'm <span><b>Cassandra Cunningham</b></span>
        </h1>
        <p>
          A <b id='noun'>Frontend Web Developer</b> eager to explore and try new things when building Web Applications and Websites.
        </p>
        <p className='detective'>
          A skilled <b id='noun'>Detective</b> for root causes when errors arise within a project.
        </p>
      </div>
    </div>
  )
}

export default Greeting