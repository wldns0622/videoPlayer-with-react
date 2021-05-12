import React, { Component } from 'react';
import '../style/video.css';

function Video({ video }) {
  return (
    <li className="video">
      <img className="video__img" src={video.snippet.thumbnails.default.url} />
      <h3 className="video__title">{video.snippet.title}</h3>
    </li>
  );
}

export default Video;