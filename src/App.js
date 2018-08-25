import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="deka.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DEKA.in.th</h1>
        </header>
        <p className="App-intro">
          พบกับ <a href="https://deka.in.th">DEKA.in.th</a> เวอร์ชั่นใหม่ เร็วๆ นี้.
        </p>
      </div>
    );
  }
}

export default App;
