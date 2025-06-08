import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="nav">
      <div>
        <Link className="link" to="/">
          Hem
        </Link>
      </div>

      <div>
        <Link className="link" to="/Projektlogik">
          Projektlogik
        </Link>
      </div>
      <div>
        <Link className="link" to="/Examensarbete">
          Examensarbete
        </Link>
      </div>
    </div>
  );
}

export default Header;
