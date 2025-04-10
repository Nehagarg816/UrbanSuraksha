import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 ">
          <a
            href="https://www.facebook.com/DPIDRDO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://x.com/DRDO_India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/drdo-ministry-of-defence-govt-of-india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/dpi.drdo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        {/* Company Info */}
        <p className="text-sm text-gray-600 font-medium">
          © UrbanSuraksha Private Limited
        </p>

        {/* Privacy */}
        <a href="/privacy" className="text-sm text-gray-500 hover:underline">
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
