import React, { Component } from 'react';
import fakeData from '../fakeData';
import NavBar from './navBar';
import VideoList from './videoList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;