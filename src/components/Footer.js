import Us from "../components/Us";
import "../assets/Footer.css";
import github from "../assets/GitHub-Mark-120px-plus.png";
import instagram from "../assets/glyph-logo_May2016.png";
import facebook from "../assets/f_logo_RGB-Black_1024.png";
import twitter from "../assets/twitter.svg";
import discord from "../assets/Discord-Logo-Black.svg";

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

      <div className="contact">
        <h3>Contact</h3>
        <input className="subject" placeholder="Subject" />
        <input className="message" placeholder="Message.." />
      </div>

      <div className="aboutus">
        <Us />
        <Us />
        <Us />
      </div>
    </div>
  );
};

export default Footer;
