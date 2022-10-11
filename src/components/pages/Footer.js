import React from "react";
import "./Footer.css";
import logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="row">
          <div className="col">
            <img src={logo} className="logo" />
            <p>
              Subscribe my Youtube Channel to watch more Videos on Website
              development and Press the bell icon to get immediate Notification
              of latest videos.
            </p>
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>KILA Road</p>
            <p>Kotwali, Jaunpur</p>
            <p>Uttar Pradesh, PIN 222001, India</p>
            <p className="email-id">heysurajr@outlook.com</p>
            <h4>+91-8425945100</h4>
          </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul className="ull">
              <li className="lii">
                <a className="aa" href="">
                  Home
                </a>
              </li>
              <li className="lii">
                <a className="aa" href="">
                  Services
                </a>
              </li>
              <li className="lii">
                <a className="aa" href="">
                  About Us
                </a>
              </li>
              <li className="lii">
                <a className="aa" href="">
                  Features
                </a>
              </li>
              <li className="lii">
                <a className="aa" href="">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newslatter{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="formm">
              <i className="far fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Easy Tutorials c 2021 - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
