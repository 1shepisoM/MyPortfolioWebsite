import React from "react";
import "../Styles/Footer.css"; 

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-logo">TM DEV</div>

        
        <p className="footer-copyrights">
          © {new Date().getFullYear()} TM DEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
