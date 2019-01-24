import * as React from 'react';
import './stylesheets/App.css';
import { Nav } from './components/Nav';

// const logo = require('./logo.svg') as string;
// <img src={logo} className="App-logo" alt="logo" />
export class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


