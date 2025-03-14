import { Link } from 'react-router-dom';
import menu from '../assets/hamburger-menu.png';

function Header() {

  function menuVisible() {
    const dropdownMenuElement = document.querySelector('.js-dropdown-menu');
    const menuIconElement = document.querySelector('.js-menu-icon');

    if (dropdownMenuElement.classList.contains('visible')) {
      dropdownMenuElement.classList.remove('visible')

    } else {
      dropdownMenuElement.classList.add('visible');

      window.addEventListener('click', (event) => {
    
        if (!dropdownMenuElement.contains(event.target) && !menuIconElement.contains(event.target)) {
          dropdownMenuElement.classList.remove('visible');
        }
      });
    }
  };

  function menuItemSelected() {
    const dropdownMenuElement = document.querySelector('.js-dropdown-menu');

    if (dropdownMenuElement.classList.contains('visible')) {
      dropdownMenuElement.classList.remove('visible')
    } 
  };

  return(
    <header>
      <Link to='/' className='name'> Cassandra Cunningham</Link>
      <div className='nav-container'>
        <Link to='/about' className='about'>About</Link>
        <Link to='/projects' className='projects'>Projects</Link>
        <img className='menu-icon js-menu-icon' src={menu} onClick={menuVisible}/>
        <div className='dropdown-menu js-dropdown-menu'>
          <Link to='/about' className='menu-about' onClick={menuItemSelected}><p>About</p></Link>
          <Link to='/projects' className='menu-projects' onClick={menuItemSelected}><p>Projects</p></Link>
          <a href='https://www.linkedin.com/in/cassandra-cunningham-a29347141/' target='_blank' className='menu-linkedin' onClick={menuItemSelected}><p>LinkedIn</p></a>
          <a href='https://github.com/ScriptSculptorJS' target='_blank' className='menu-github' onClick={menuItemSelected}><p>Github</p></a>
          <a href='mailto:cm_cunningham27@yahoo.com' target='_blank' className='menu-email' onClick={menuItemSelected}><p>Email</p></a>
        </div>
      </div>
    </header>
  )
}

export default Header