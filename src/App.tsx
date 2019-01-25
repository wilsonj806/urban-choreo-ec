import * as React from 'react';
import './stylesheets/App.css';
// import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';


import { Nav } from './components/Nav';
/* import { About } from './pages/About';
import { UrbanChoreoEC } from './pages/UrbanChoreoEC';
import { Landing } from './pages/Landing'; */

const logo = require('./logo.svg') as string;
export class App extends React.Component<any, any> {
  render() {
    return (
      <>
        <Nav/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </>
    );
  }
}
