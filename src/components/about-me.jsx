function AboutMe() {

  return(
    <div className='about-me-container'>
      <div className='about-me-content' id='bio-content'>
        <h1 className='titles'>
          Bio
        </h1>
        <p>
          Ever since I was a little child <span>I have always been artistic</span>. Whether it be with art, craftsmanship, gardening, photography, etc. However, I felt that my life long career was to become a teacher. While in college for Elementary Education I took a Web Developing class and found I really enjoyed it. I was able to utilize my artistic abilities and see my work come together. <span>A lot has changed since the early 2000's with user experience and it has got me excited!</span>
        </p>
        <p>
          After years of teaching and tutoring students, I realized that <span>I wanted a career shift</span>. Thus, began my journey into Software Engineering. I took a <span>FullStack Web Development Bootcamp with University of Washington in 2021</span>. I found I quite enjoyed working with others on projects and bringing our ideas together. At the conclusion of our course we created a MERN app.
        </p>
        <p className='bottom-text'>
          Before finding a career in web development, I began working for eBay where I gained experience in <span>Project Management and finding solutions to problems</span> within our tech stack. Now that my time at eBay has come to a close, I'm excited to take the knowledge I've gained—from my coding bootcamp, my experience at eBay, and the time I've spent sharpening my web development skills—to the next level. I've been focused on building new projects, deepening my understanding, and preparing to <span>take the next step in making my dream of becoming a Software Engineer a reality.</span>
        </p>
        
        
        <h2 className='titles'>
          Let's Work Together!
        </h2>
        <p>
          I bring a unique blend of creativity, adaptability, and collaboration to every project I work on. My background in education sharpened my ability to communicate clearly, explain complex ideas, and work effectively with diverse groups of people. My time at eBay further reinforced these skills, as I regularly collaborated across teams, managed projects, and helped troubleshoot technical challenges. Both roles taught me how to listen actively, problem-solve under pressure, and keep communication at the core of successful teamwork.
        </p>
        <p>
          As a developer, I'm committed to writing clean, maintainable code, continuously learning new technologies, and contributing to team success. Whether it's building intuitive user interfaces, solving tough bugs, or brainstorming new features, I show up with curiosity, positivity, and a drive to grow.
        </p>
        {/*
        <p>
          I am very passionate about helping you <span>achieve what you are envisioning for your website/app!</span>
        </p>
        <p>
          Is your website/app running into issues? <span>Let me use my detective skills to find their solutions!</span>
        </p>
        */}
      </div>

      <div className='about-me-content' id='skills-content'>
        <div id='skills-title-container'>
          <h1 className='titles'>
            Skills
          </h1>
        </div>
        <div id='skills-list-container'>
          <p>
            HTML5
          </p>
          <p>
            CSS
          </p>
          <p>
            Javascript
          </p>
          <p>
            React
          </p>
          <p>
            WordPress
          </p>
          <p>
            Error Handling
          </p>
        </div>
        
        <div id='recognition-title-container'>
          <h1 className='titles'>
            Certificates
          </h1>
        </div>
        <div id='recognition-list-container'>
          <p>
            Full Stack Web Development Certificate
          </p>
          <p>
            Grade: A+
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe