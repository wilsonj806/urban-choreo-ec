import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import { About } from '../pages/About';
import { UrbanChoreoEC } from '../pages/UrbanChoreoEC';
import { App } from '../App';


export class Nav extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/urban-choreo-east-coast'>Urban Choreo-East Coast</Link>
            </li>
          </ul>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/urban-choreo-east-coast" component={UrbanChoreoEC} />
        </nav>
      </Router>
    );
  }
};

