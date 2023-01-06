import './sidebar.scss';
import { RiLinkedinLine } from 'react-icons/ri';
import * as icons from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <a href="https://www.linkedin.com/in/shaheerch/">
            <RiLinkedinLine size={25} />
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://github.com/ShaheerCH">
            <icons.FiGithub size={25} />
          </a>
        </li>
        <li className="sidebar__item">
          <a href="https://twitter.com/Shaheer_choudry">
            <icons.FiTwitter size={25} />
          </a>
        </li>
      </ul>
      <div class="left__line"></div>
    </div>
  );
}
