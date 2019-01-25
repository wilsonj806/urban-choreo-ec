import * as React from 'react';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt } from 'react-router-dom';

import { About } from '../pages/About';
import { UrbanChoreoEC } from '../pages/UrbanChoreoEC';
import { Landing } from '../pages/Landing';
// FIXME Nav is breaking the App because its stuck in an infinite loop

// TODO Move the <Link> component into App.tsx and have placeholders instead for the child of <li>

export class Nav extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <>
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
          </nav>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/urban-choreo-east-coast" component={UrbanChoreoEC} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}
