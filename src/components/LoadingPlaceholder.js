// Based on Iris van der Hooven implementation available at Codepen
// https://codepen.io/podenemus/pen/eJqwBL
import React from 'react';
import './LoadingPlaceholder.css';

export default function LoadingPlaceholder() {
  return (
    <div className="loading-placeholder">
      <div className="loader book">
        <figure className="page"></figure>
        <figure className="page"></figure>
        <figure className="page"></figure>
      </div>

      <h2>Loading</h2>
    </div>
  )
}
