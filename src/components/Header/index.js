import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navBarContainer">
    <ul className="ulContainer">
      <Link to="/">
        <li className="li">Home</li>
      </Link>
      <Link to="/about">
        <li className="li">About</li>
      </Link>
    </ul>
  </nav>
)
export default Header
