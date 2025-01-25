import React from 'react'
import "../Footer/footer.css"

function Footer() {
  return (
    <div>
        <footer className="Main-footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        {/* Help & Support Section */}
        <div className="footer-section help-support">
          <h3>Help & Support</h3>
          <ul>
            <li>24×7 Live help</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h3>Contact us</h3>
          <p>+91 8612345902</p>
          <p>+51 8612345902</p>
          <h3>Office</h3>
          <p>Thiruvananthapuram, Kerala</p>
          <p>Kollam, Kerala</p>
          <p>Ernakulam, Kerala</p>
          <p>Kannur, Kerala</p>
        </div>

        {/* Information Section */}
        <div className="footer-section information">
          <h3>Information</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        
        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Social media</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Follow us on</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}   

export default Footer