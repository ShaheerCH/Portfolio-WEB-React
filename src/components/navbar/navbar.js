import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#Hero" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#ABOUT" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#PROJ" className="navbar__link">
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a href="#CONT" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
