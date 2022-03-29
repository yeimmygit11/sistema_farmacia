import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState, useContext } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const isLoggedUser = user ? true : false;

  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header>
      <div className="container flex justify-space-between align-center">
        <div className= "container2">
          <Link to="/" className="logo">
            PYC 
          </Link>
          <Link to="/" className="logo2">
            farmacia
          </Link>
        </div>
        <div className="flex flex.align-center">
          <Navigation></Navigation>

          {!isLoggedUser ? (
            <Link to="/login" className="btn btn-login">
              <i className="fa-solid fa-user"></i>
            </Link>
          ) : (
            <button className="btn btn-login" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          )}

          <button className="btn btn-menu-responsive" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={menuOpened ? "menu-responsive open" : "menu-responsive"}>
        <Menu></Menu>
      </div>
    </header>
  );
}

export default Header;
