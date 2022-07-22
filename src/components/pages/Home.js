import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";



export default function Home() {

  return (
    <>
      <h1 className='home'>
      <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/Daaz">De A a Z</Link>
        <p><br /></p>
        <Link to="/Porcategoria">Por categoria</Link>
        <p><br /></p>
        <Link to="/TVs">TVs</Link>
        <p><br /></p>
        <Link to="/Radios">Radios</Link>
        <p><br /></p>

          
  
        </nav></div>
</h1>

    </>
        
        
         
  );
}
