import Us from "../components/Us";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialmedia">
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Discord</li>
          <li>Github</li>
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
