import './navbar.scss';
import MainLogo from '../../assets/MainLogo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={MainLogo} alt="logo" />
      <ul className="navbar__menu">
        <li className="navbar__item">
          <span>01 </span>
          <a href="#HOME" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <span>02 </span>
          <a href="#ABOUT" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <span>03 </span>
          <a href="#PROJ" className="navbar__link">
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <span>04 </span>
          <a href="#CONT" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
