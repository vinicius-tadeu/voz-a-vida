import React from "react";
import "./styles/Header.sass";
import Background from './Background';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="navigation-header">
          <ul className="ul-header">
            <li><a className="a-header" href="#">Home</a></li>
            <li><a className="a-header" href="#">Quem somos</a></li>
            <li><a className="a-header" href="#">História</a></li>
            <li><a className="a-header" href="#">Seja um doador</a></li>
            <li><a className="a-header" href="#">Projetos</a></li>
            <li><a className="a-header" href="#">Apoiadores</a></li>
            <li><a className="a-header" href="#">Fale Conosco</a></li>
          </ul>
        </nav>
      </header>
      <Background/>
    </>
  );
}

export default Header;
