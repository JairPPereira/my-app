import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
    export default function Lama() {
        return (
          <div>
                <p><br /></p>
            <iframe
              src="https://drive.google.com/file/d/1t0QUd-Ftuny1qUXHb0W5Godew9I3FhQC/preview"
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