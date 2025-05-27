import { Link } from "react-router-dom";
function Header() {

  return (
<div>
    <div>

       <Link className="link" to="/">
            Hem
            </Link> 
    </div>
    
    <div>
       <Link className="link" to="/Contact">
            Contact
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