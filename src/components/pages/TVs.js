import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

export default function TVs() {

  return (
    <>
      <h1 className='tvs'>

        <nav>
          <p><br /></p>
          <Link to="./Boasnovas">Boas novas</Link>
          <p><br /></p>
          <Link to="./Fmodia">FM O Dia</Link>
          <p><br /></p>
          <Link to="./Graopara">Grão Pará</Link>
          <p><br /></p>
          <Link to="./Rba">Rba</Link>
          <p><br /></p>
          <Link to="./Recordnews">Recordnews</Link>
          <p><br /></p>
          <a href="https://jppfilmesonline.blogspot.com/p/bandnews.html" target="_blank" rel="noopener noreferrer">Bandnews</a>
          <p><br /></p>
          <a href="https://jppfilmesonline.blogspot.com/p/globonews.html?m=1" target="_blank" rel="noopener noreferrer">Globonews</a>
          <p><br /></p>
          <a href="https://jppfilmesonline.blogspot.com/p/untitled-1-download-video-file.html" target="_blank" rel="noopener noreferrer">CNN Brasil</a>
          <p><br /></p>
          <a href="http://video01.soultv.com.br/cnnbrasil/cnnbrasil/chunklist_w1048115623.m3u8" target="_blank" rel="noopener noreferrer">CNN Brasil - Apenas para navegadores mobile</a>
          <p><br /></p>
          <Link to="./Sbt">Sbt</Link>
          <p><br /></p>



        </nav></h1>

    </>



  );
}

