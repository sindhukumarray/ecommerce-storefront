import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
            <li>Home</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Checkout</li>
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

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

            <FaGithub />

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