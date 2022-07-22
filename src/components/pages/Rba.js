import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Rba() {
    return (
            <div>
               <p><br /></p>
            <iframe className='video-js' allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" src="https://streaming.gruporba.com.br/" width="720px" height="auto" title="video"/>
            {""}
            <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

        
    );
}