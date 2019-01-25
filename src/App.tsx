import * as React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';


import { Nav } from './components/Nav';
import { About } from './pages/About';
import { UrbanChoreoEC } from './pages/UrbanChoreoEC';
import { Landing } from './pages/Landing';

export class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/urban-choreo-east-coast'>Urban Choreo-East Coast</Link>
          </Nav>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/urban-choreo-east-coast" component={UrbanChoreoEC} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
