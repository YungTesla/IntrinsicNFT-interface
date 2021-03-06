import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Header.css";
import "../assets/css/index.css";
import { ReactComponent as MenuOpen } from "../assets/images/menu.svg";
import { ReactComponent as MenuClose } from "../assets/images/close.svg";
import { ReactComponent as Login } from "../assets/images/login.svg";
import { motion } from "framer-motion";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const headerVariant = {
    init: {
      height: "100vh",
    },
    animate: {
      height: "10vh",
      transition: { delay: 3, duration: 1, ease: "easeOut" },
    },
    stop: {
      height: "10vh",
    },
  };

  const svgVariant = {
    init: {
      scale: 1,
    },
    animate: {
      scale: 1,
      x: [0, 100, 0],
      transition: { duration: 1, ease: "easeInOut", delay: 1 },
    },
  };

  const pathVariant = {
    init: { rotate: -180, opacity: 1, scale: 3 },
    animate: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const keyVariant = {
    init: { rotate: 180, opacity: 0 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: { delay: 1, duration: 1, ease: "easeInOut" },
    },
  };

  const titleVariant = {
    init: { x: "-100vw" },
    animate: { x: 0, transition: { duration: 2 } },
  };

  const menuVariant = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 4 } },
  };

  return (
    <motion.header
      variants={headerVariant}
      initial="init"
      animate="animate"
      whileTap="stop"
    >
      <div class="name-wrap" onClick={(event) => window.scrollTo(0, 0)}>
        <Link to="/">
          <motion.svg
            variants={svgVariant}
            initial="init"
            animate="animate"
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 350"
          >
            <defs>
              <linearGradient
                gradientTransform="matrix(1 0 0 1 0 0)"
                gradientUnits="userSpaceOnUse"
                id="LinearGradient"
                x1="45.2188"
                x2="305.188"
                y1="174.797"
                y2="174.797"
              >
                <stop offset="0" stop-color="#44bba4" />
                <stop offset="1" stop-color="#3f88c5" />
              </linearGradient>
            </defs>
            <g id="Box">
              <motion.path
                d="M300.156 45.25L88.9062 45.4688C87.6016 45.4699 86.3393 45.9631 85.4062 46.875L47.1875 84.2188C46.5827 84.6925 46.0849 85.2687 45.75 85.9688C45.6497 86.1784 45.6019 86.4004 45.5312 86.625C45.4126 86.9623 45.3542 87.2788 45.3125 87.625C45.2966 87.7875 45.2188 87.9271 45.2188 88.0938C45.2188 89.7443 45.2188 297.693 45.2188 299.344C45.2188 302.105 47.4573 304.344 50.2188 304.344L261.469 304.344C261.614 304.344 261.733 304.262 261.875 304.25C262.193 304.228 262.468 304.149 262.781 304.062C263.493 303.863 264.142 303.562 264.688 303.094C264.776 303.018 264.884 303.021 264.969 302.938L303.656 265.094C304.619 264.153 305.187 262.877 305.188 261.531L305.188 50.25C305.188 49.5921 304.993 49.0194 304.781 48.4688C304.771 48.4412 304.792 48.4023 304.781 48.375C304.778 48.3674 304.784 48.3514 304.781 48.3438C304.422 47.4727 303.855 46.7725 303.125 46.25C302.665 45.9033 302.15 45.6369 301.562 45.4688C301.377 45.4139 301.191 45.4087 301 45.375C300.719 45.328 300.458 45.2497 300.156 45.25ZM287.906 55.25L259.406 83.0938L62.6562 83.0938L90.9375 55.4688L287.906 55.25ZM295.188 62.125L295.188 259.438L266.469 287.469C266.469 265.484 266.469 95.5104 266.469 90.1875L277.906 79L295.188 62.125ZM256.469 93.0938L256.469 294.344L55.2188 294.344C55.2188 283.697 55.2188 104.242 55.2188 93.2812C65.8743 93.2718 245.813 93.1032 256.469 93.0938Z"
                fill="url(#LinearGradient)"
                variants={pathVariant}
                initial="init"
                animate="animate"
              />
            </g>
            <g id="Keyhole">
              <motion.path
                d="M155.842 140.158C138.275 140.158 124.032 154.401 124.032 171.968C124.032 183.788 130.583 194.354 140.666 199.847L127.728 237.671C126.013 242.696 129.273 247.276 134.574 247.276L177.109 247.276C182.411 247.276 185.67 242.694 183.955 237.671L171.044 199.847C181.112 194.35 187.652 183.781 187.652 171.968C187.652 154.401 173.409 140.158 155.842 140.158ZM155.842 147.03C169.606 147.03 180.78 158.203 180.78 171.968C180.78 182.09 174.678 191.093 165.499 194.953C163.831 195.655 162.987 197.536 163.573 199.249L177.448 239.909C177.64 240.473 177.684 240.404 177.109 240.404L134.574 240.404C134 240.404 134.044 240.472 134.236 239.909L148.137 199.249C148.723 197.535 147.88 195.654 146.21 194.953C137.017 191.096 130.904 182.094 130.904 171.968C130.904 158.203 142.077 147.03 155.842 147.03Z"
                fill="url(#LinearGradient)"
                variants={keyVariant}
                initial="init"
                animate="animate"
              />
            </g>
          </motion.svg>
        </Link>
      </div>
      <motion.div
        className="text"
        variants={titleVariant}
        initial="init"
        animate="animate"
        onClick={(event) => window.scrollTo(0, 0)}
      >
        INTRINSIC NFT
      </motion.div>
      <motion.div
        class="menu"
        variants={menuVariant}
        initial="init"
        animate="animate"
      >
        <Link to="/about">
          <Login />
        </Link>
        <div onClick={handleClick}>{click ? <MenuClose /> : <MenuOpen />}</div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
