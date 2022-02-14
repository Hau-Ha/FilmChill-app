import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>FILMCHILL</div>
      <div>
        ©2021,
        <Link to="">PhimChill.Net</Link>
      </div>
    </div>
  );
};

export default Footer;
