import React from "react";
import { footerStyle } from "./style";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/bookstore.png";

export const Footer = () => {
  const classes = footerStyle();

  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                © All rights reserved.
                By Alifiya Kapasi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;