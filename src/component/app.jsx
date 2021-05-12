import React, { Component } from 'react';
import '../style/app.css';
import { fakeData } from '../fakeData';
import NavBar from './navBar';
import VideoList from './videoList';
import VideoPlayer from './videoPlayer';

class App extends Component {
  state = {
    vidoes: [...fakeData],
    currentVideo: this.state.videos[0],
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="video-container">
          <VideoPlayer video={this.state.currentVideo} />
          <VideoList videos={this.state.vidoes} />
        </div>
      </>
    );
  }
}

export default App;