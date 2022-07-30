import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Porcategoria() {

  return (
    <>
      <h1 className='porcategoria'>
      
<nav>
      <p><br /></p>
      <Link to="./Acao">Ação</Link>
      <p><br /></p>
      <Link to="./Aventura">Aventura</Link>
      <p><br /></p>
      <Link to="./Comedia">Comedia</Link>
      <p><br /></p>
      <Link to="./Drama">Drama</Link>
      <p><br /></p>
      <Link to="./Ficcao">Ficção</Link>
      <p><br /></p>
      <Link to="./Romance">Romance</Link>
      <p><br /></p>
      <Link to="./Suspense">Suspense</Link>
      <p><br /></p>
      <Link to="./Series">Séries</Link>
      <p><br /></p>
      <Link to="./Terror">Terror</Link>


     
      </nav></h1>

    </>
        
        
         
  );
}