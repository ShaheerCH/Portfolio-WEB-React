import './navbar.scss';
import MainLogo from '../../assets/MainLogo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <img className="logo" src={MainLogo} alt="logo" />
        </li>

        <li className="navbar__item">
          <span>01 </span>
          <a href="#" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <span>02 </span>
          <a href="#" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <span>03 </span>
          <a href="#" className="navbar__link">
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <span>04 </span>
          <a href="#" className="navbar__link">
            Skill
          </a>
        </li>
        <li className="navbar__item">
          <span>05 </span>
          <a href="#" className="navbar__link">
            Services
          </a>
        </li>
        <li className="navbar__item">
          <span>06 </span>
          <a href="#" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
