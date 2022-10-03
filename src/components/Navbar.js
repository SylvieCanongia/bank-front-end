import { NavLink } from "react-router-dom";
import ArgentBankLogo from './../assets/img/argentBankLogo.png';

const Navbar = () => {
  return (
     <nav className="main-nav">
        <NavLink exact="true" to="/" className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={ ArgentBankLogo }
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        <NavLink className="main-nav-item" exact="true" to="/signIn">
              <i className="fa fa-user-circle"></i>
              Sign In
        </NavLink>
        </div>
      </nav>
  );
};

export default Navbar;