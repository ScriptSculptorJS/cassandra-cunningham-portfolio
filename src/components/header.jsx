import { Link } from 'react-router-dom';

function Header() {

  return(
    <header>
      <Link to='/' className='name'> Cassandra Cunningham</Link>
      <div className='nav-container'>
        <Link to='/about' className='about'>About</Link>
        <Link to='/projects' className='projects'>Projects</Link>
      </div>
    </header>
  )
}

export default Header