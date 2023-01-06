import './sidebar.scss';
import { RiLinkedinLine } from "react-icons/ri";
import * as icons from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item"> <RiLinkedinLine size={25} /> </li>
        <li className="sidebar__item"> <icons.FiGithub size={25} /></li>
        <li className="sidebar__item"> <icons.FiTwitter size={25} /></li>
      </ul>
      <div class="left__line"></div>
    </div>
  );
}
