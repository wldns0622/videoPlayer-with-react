import React, { Component } from 'react';
import { fakeData } from '../fakeData';
import '../style/video.css';

function Video() {
  return (
    <li className="video">
      <img className="video__img" src={fakeData[0].snippet.thumbnails.default.url} />
      <h3 className="video__title">{fakeData[0].snippet.title}</h3>
    </li>
  );
}

export default Video;