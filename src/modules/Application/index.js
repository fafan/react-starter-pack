import React from 'react';
import Helmet from 'react-helmet';
import Button from '../../samples/Button/index';
import logo from './logo.svg';
import './reset.css';
import './index.css';

export default function Application() {
  return (
    <div className="App">
      <Helmet title="My Application Title" />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <Button>Test</Button>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
