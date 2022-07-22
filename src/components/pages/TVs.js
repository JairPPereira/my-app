import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

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
      <Link to="./Sbt">Sbt</Link>
      

     
      </nav></h1>

    </>
        
        
         
  );
}

