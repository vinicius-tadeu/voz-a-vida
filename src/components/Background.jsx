import React from "react";
import background from "../assets/svg/Background.svg";
import './styles/Background.sass'
function Background() {
  return (
    <>
      <img className="index-background" src={background} alt="Imagem de fundo do site."/>
    </>
  );
}

export default Background;
