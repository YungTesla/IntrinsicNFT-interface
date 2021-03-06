import "../assets/css/Footer.css";
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.svg";
import discord from "../assets/images/discord.svg";
// import john from "../assets/images/john.jpg";
// import mart from "../assets/images/mart.jpg";
// import wouter from "../assets/images/wouter.jpg";
// import { motion } from "framer-motion";

// const buttonVariant = {
//   animate: {
//     "background-color": "var(--brandcolor-green)",
//     color: "var(--c-secondaryfocus)",
//     scale: 1.05,
//     "box-shadow": "0px 10px 13px -7px var(--brandcolor-blue)",
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialmedia">
        <ul>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Facebook" />
          </li>
          <li>
            <img src={twitter} alt="Github" />
          </li>
          <li>
            <img src={discord} alt="Discord" />
          </li>
          <li>
            <img src={github} alt="Github" />
          </li>
        </ul>
      </div>

      {/* <div className="contact">
        <h3>Contact</h3>
        <input className="subject" placeholder="Subject" />
        <input className="message" placeholder="Message.." />
      </div> */}

      {/* <div className="aboutus">
        <div className="person-card">
          <motion.img
            src={wouter}
            alt="Person"
            whileHover="animate"
            variants={buttonVariant}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="person-card">
          <motion.img
            src={john}
            alt="Person"
            whileHover="animate"
            variants={buttonVariant}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="person-card">
          <motion.img
            src={mart}
            alt="Person"
            whileHover="animate"
            variants={buttonVariant}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
