import linkedin from '../assets/linkedin-logo.png';
import github from '../assets/github.png';
import email from '../assets/email.png';

function ContactBar() {

  return(
    <div className='contact-container'>
      <div className='image-container'>
        <div className='linkedin'>
          <a href='https://www.linkedin.com/in/cassandra-cunningham-a29347141/' target='_blank'><img className='linkedin-image' src={linkedin}/></a>
        </div>
      </div>
        
      <div className='image-container'>
        <div className='github'>
          <a href='https://github.com/ScriptSculptorJS' target='_blank'><img className='github-image' src={github}/></a>
        </div>
      </div>

      <div className='image-container'>
        <div className='email'>
          <a href='mailto:cm_cunningham27@yahoo.com' target='_blank'><img className='email-image' src={email}/></a>
        </div>
      </div>
    </div>
  )
}

export default ContactBar