import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>E-Commerce Store</h2>

          <p>
            Your one-stop destination
            for electronics, fashion,
            accessories and much more.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>

        <li>
          <Link to="/">
           Home
          </Link>
        </li>

       <li>
        <Link to="/cart">
         Cart
       </Link>
      </li>

      <li>
       <Link to="/wishlist">
        Wishlist
       </Link>
     </li>

     <li>
       <Link to="/checkout">
       Checkout
      </Link>
     </li>

    </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: sindhukumarray007@gmail.com</p>

          <p>Phone: +91 7479524973</p>

          <p>India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

  <a
    href="https://www.facebook.com/share/1Eqt5CALpA/"
    target="_blank"
    rel="noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/sanatani_er_sindhu?igsh=M292NTVtZ2JjaTdi"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/sindhu-kumar-ray-456b8a392"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/sindhukumarray"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

</div>

          
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 E-Commerce Store |
        by Er_sindhu
      </div>

    </footer>
  );
}

export default Footer;