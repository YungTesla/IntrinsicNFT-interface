import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/Header.css";
import "../assets/index.css";
import { ReactComponent as Logo } from "../assets/brandlogocolor.svg";
import { ReactComponent as MenuOpen } from "../assets/menu.svg";
import { ReactComponent as MenuClose } from "../assets/close.svg";
import { ReactComponent as Login } from "../assets/login.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <div class="name-wrap">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <h1>INTRINSIC NFT</h1>
      <div class="menu">
        <Link to="/about">
          <Login />
        </Link>
        <div onClick={handleClick}>{click ? <MenuClose /> : <MenuOpen />}</div>
      </div>
    </header>
  );
};

export default Header;
