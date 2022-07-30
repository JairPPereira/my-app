import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Romance() {

  return (
    <>
      <h1 className='romance'>

        <nav>
        <p class="barNav">
      <Link to="./Aformadaagua">
      <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hHPFq7myTjAVH6CwQjamAuUqhrr.jpg"
            alt="Aforma da agua"
          /></Link>
      
      <Link to="./Albertnobbs">Albert Nobbs</Link>
      
      <Link to="./Asvampiras">As Vampiras</Link>
      
      <Link to="./Coragemparaamar">Coragem para amar</Link>
      
      <Link to="./Entreoamoreafama">Entre o amor e a fama</Link>
      
      <Link to="./Jogandocomoamor">Jogando com o amor</Link>
      
      <Link to="./Loucamenteapaixonados">Loucamente apaixonados</Link>
      
      <Link to="./Pagandobqmt">Pagando Bem que Mal Tem</Link>
      
      <Link to="./Umamorprarecordar">Um amor pra recordar</Link>
      
      <Link to="./Ummatchsurpresa">Um match surpresa</Link>
      

</p>

     
      </nav></h1>

    </>
        
        
         
  );
}

