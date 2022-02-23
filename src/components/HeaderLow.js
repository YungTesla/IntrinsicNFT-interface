import { Link } from "react-router-dom";
import "../assets/HeaderLow.css";
import { ReactComponent as Logo2 } from "../assets/brandlogo.svg";
import { ReactComponent as MenuOpen } from "../assets/menu.svg";
import { ReactComponent as MenuClose } from "../assets/close.svg";
import { ReactComponent as Login } from "../assets/login.svg";
import { useState } from "react";

function HeaderLow() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="header-low">
      <div>
        <Link to="/">
          <Logo2 className="logo" />
        </Link>
      </div>
      <div class="menu">
        <Link to="/about">
          <Login />
        </Link>
        <div onClick={handleClick}>{click ? <MenuClose /> : <MenuOpen />}</div>
      </div>
    </header>
  );
}

export default HeaderLow;
