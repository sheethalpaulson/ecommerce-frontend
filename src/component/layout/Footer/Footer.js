import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter"></div>

      <div className="midFooter">
        <h3>ECOMMERCE.</h3>
        <p>Copyrights 2021 &copy; Sheethal</p>
      </div>

      <div className="rightFooter"></div>
    </footer>
  );
};

export default Footer;
