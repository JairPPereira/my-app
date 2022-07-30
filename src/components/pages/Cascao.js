import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
    export default function Cascao() {
        return (
          <div>
                <p><br /></p>
            <iframe
              src="https://drive.google.com/file/d/1spWVLJmPVWtiIzb4xFpbhDeKsO9Rcsa0/preview"
              frameborder="0"
              width="100%" height="480px"
              allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
              title="video"
            />{" "}
                        <div className="nave">
            <nav>
            <p><br /></p>
            <Link to="/">Home</Link>
      
      <p><br /></p>
      
            </nav></div></div>
      
        );
      }