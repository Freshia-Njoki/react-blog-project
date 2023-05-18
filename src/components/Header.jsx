import { Link } from 'react-router-dom'
import { FaHome, FaBook, FaInfoCircle  } from 'react-icons/fa'
import './header.css'
function Header() {
  return (
    <div>
    <div className='header'>
      <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}><FaHome /> Home</Link>
      <Link to="/blogs" style={{display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}><FaBook />Blogs</Link>
      <Link to="/about" style={{display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}><FaInfoCircle />About</Link>
    </div>
    </div>
  )
}

export default Header