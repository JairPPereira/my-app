import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Teste() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://player.aovivotv.xyz/channels/globonews"
        frameborder="0"
        width="100%" height="450px"
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





