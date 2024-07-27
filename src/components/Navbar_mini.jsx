import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navbar_mini.css";

export default function Navbar() {
  return (
    <div className="container-to">
      <nav className="container">
        <ul className="hmenu">
          <li>
            <FontAwesomeIcon icon={faHome} />
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Join our Team</a>
          </li>
          <li>
            <a href="/">contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
