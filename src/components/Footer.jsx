import React from "react";
import "./styles/Footer.sass";
import logo from "../assets/img/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <figure className="footer-figure">
        <img src={logo} alt="Logo do Instituto Voz à Vida" width="50px" />
      </figure>
      <p>© Copyright 2022 - Instituto Voz à Vida</p>
    </footer>
  );
}

export default Footer;
