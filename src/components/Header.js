import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/Header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MenuOpen } from "../assets/menu.svg";
import { ReactComponent as MenuClose } from "../assets/close.svg";
import { ReactComponent as Login } from "../assets/login.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <div class="name-wrap">
        <Logo className="logo" />
        <p>Name</p>
      </div>
      <nav>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Login />
        <div class="menu" onClick={handleClick}>
          {click ? <MenuClose /> : <MenuOpen />}
        </div>
      </div>
    </header>
  );
};

export default Header;
