import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 footer-foot">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <h5>Green Revolution</h5>
            </div>
            <p>
              "Farmers sow seeds of hope, reaping not just crops but the
              sustenance of humanity."
            </p>
            <div className="d-flex justify-content-center align-item-center gap-3 ">
              <a
                class="social-icon facebook "
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="http://localhost:5173/img/facebook-logo.png"
                  alt="Facebook"
                />
              </a>

              <a
                class="social-icon  twitter "
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="http://localhost:5173/img/twitter_icon.png"
                  alt="Twitter"
                />
              </a>

              <a
                class="social-icon instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="http://localhost:5173/img/instagram.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <h5>Contact Company</h5>
            <table className="table ">
              <tbody>
                <tr>
                  <td className="w-25 text-end bg-dark " style={{ borderBottomWidth: "0" }}>
                    <img
                      className="footor-contact-logo"
                      src="http://localhost:5173/img/phone.png"
                      alt="Phone"
                      width="40"
                    />
                  </td>
                  <td
                    style={{ paddingTop: "17px",borderBottomWidth: "0" }}
                    className="w-50 text-start bg-dark text-white "
                  >
                    9781617288
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottomWidth: "0" }} className="bg-dark"></td>
                  <td style={{ borderBottomWidth: "0" }} className="text-start bg-dark text-white">9781617288</td>
                </tr>
                <tr>
                  <td style={{ borderBottomWidth: "0" }} className="w-25 text-end bg-dark">
                    <img
                      className="footor-contact-logo"
                      src="http://localhost:5173/img/emaillogo.png"
                      alt="Email"
                      width="40"
                    />
                  </td>
                  <td
                    style={{ paddingTop: "17px",borderBottomWidth: "0" }}
                    className="w-50 text-start bg-dark text-white"
                  >
                    upinderjitsingh32@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
             
              <li className="list-items">
                <li className="">
                  <Link
                    className="nav-link link-color"
                    aria-current="page"
                    to={"/home"}
                  >
                    Home
                  </Link>
                </li>

                <li className="">
                  <Link
                    className="nav-link link-color"
                    aria-current="page"
                    to="/chemical"
                  >
                    Chemical
                  </Link>
                </li>

                <li className="">
                  <Link
                    className="nav-link link-color"
                    aria-current="page"
                    to="/soiltesting"
                  >
                    Soil
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="nav-link link-color"
                    aria-current="page"
                    to="/weather"
                  >
                    Weather
                  </Link>
                </li>
                <Link
                  to={"/contactus"}
                  className="text-white text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
