import React from "react";
import Header from "../../components/PageMenuHeader/Header";

import "./styles.css";
import "../../assets/styles/global.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="mid-about">
        <h1>
          Somos a Comissão de Gestão Ambiental da Universidade Federal da
          Paraíba
        </h1>
        <p>
          É um facto estabelecido de que um leitor é distraído pelo conteúdo
          legível de uma página quando analisa a sua mancha gráfica. Logo, o uso
          de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras,
          ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o
          texto legível. Muitas ferramentas de publicação electrónica e editores
          de páginas web usam actualmente o Lorem Ipsum como o modelo de texto
          usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar
          muitos websites ainda na sua infância. Várias versões têm evoluído ao
          longo dos anos, por vezes por acidente, por vezes propositadamente
          (como no caso do humor).
        </p>
      </div>
      <div className="bottom">
        <a href="https://www.instagram.com/cgaufpb/">
          <img
            src={require("../../assets/img/icons/logo-instagram.svg")}
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/GestaoAmbientalUfpb/">
          <img
            src={require("../../assets/img/icons/logo-facebook.svg")}
            alt="facebook"
          />
        </a>
        <a href="https://www.google.com/cga">
          <img
            src={require("../../assets/img/icons/globe-outline.svg")}
            alt="globo"
          />
        </a>
      </div>
    </>
  );
};

export default About;
