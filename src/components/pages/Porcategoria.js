import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Porcategoria() {

  return (
    <>
      <h1 className='porcategoria'>
      
<nav>
      <p><br /></p>
      <Link to="./Acao">Açao</Link>
      <p><br /></p>
      <Link to="./Comedia">Comedia</Link>
      <p><br /></p>
      <Link to="./Ficcao">Ficção</Link>

     
      </nav></h1>

    </>
        
        
         
  );
}