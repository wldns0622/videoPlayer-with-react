import React, { Component } from 'react';
import fakeData from '../fakeData';
import NavBar from './navBar';
import VideoList from './videoList';
import VideoPlayer from './videoPlayer';

class App extends Component {
  render() {
    return (
      <>
        <VideoPlayer />
      </>
    );
  }
}

export default App;