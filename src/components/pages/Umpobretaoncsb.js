import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Sbt() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://ottvsmediaservice.ottvs.com.br/57501e29-9e90-4bf1-8784-645b95b40035/0151359_movie.ism/manifest(format=mpd-time-csf,encryption=cenc)"
        frameborder="0"
        width="100%" height="320px"
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





