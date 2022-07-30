import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Comedia() {

  return (
    <>
      <h1 className='comedia'>

        <nav>
      <p><br /></p>
      <p class="barNav">
      <Link to="./Ajusticeira">A justiceira</Link>

      <Link to="./Chef">Chef</Link>

      <Link to="./Deencontrosam">
      <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/j4R88TeetyCmY2pwGqkn5stNIa7.jpg"
            alt="De encontro com o amor"
          />
        </Link>

      <Link to="./Minhamaeeumaviagem">Minha mãe é uma viagem</Link>

      <Link to="./Otrapaceiro">
      <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mYgicNd1CENL4BfEsrBnAO6dekc.jpg"
            alt="O trapaceiro"
          /></Link>

      <Link to="./Tudopraficarcomela">Tudo pra ficar com ela</Link>

      <Link to="./Ummotoristaemapuros">Um motorista em apuros</Link>

      <Link to="./Umjovememapuros">Um jovem em apuros</Link>

      <Link to="./Umpobretaoncsb">Um pobretão na Casa Branca</Link>
      </p>

     
      </nav></h1>

    </>
        
        
         
  );
}

