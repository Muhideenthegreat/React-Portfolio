import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer">
            <a href="https://github.com/Muhideenthegreat"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhideen-mustapha/"><FaLinkedin /></a>
            <a href="https://twitter.com/yourtwitterusername"><FaTwitter /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Muhideen Mustapha</p>
    </footer>
  );
}

export default Footer;
