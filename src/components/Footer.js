function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-about">
            <h3>Axora Solutions Private Limited</h3>
            <p>Your trusted partner for business process outsourcing.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <h5>Axora Solutions Private Limited</h5>
            <p>
              Email:{" "}
              <a href="mailto:md@axorasolutions.com">
                md@axorasolutions.com
              </a>
            </p>
            <p>Phone: (+91) 88306-19049</p>
            <div className="social-links">
              <a href="#">Facebook</a> | <a href="#">LinkedIn</a> |{" "}
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Axora Solutions Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
