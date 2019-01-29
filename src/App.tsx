import * as React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch, NavLink } from 'react-router-dom';


import { Nav } from './components/NavBar';
import { About } from './pages/About';
import { UrbanChoreoEC } from './pages/UrbanChoreoEC';
import { Landing } from './pages/Landing';
import { LandingShapes, } from './templates/LandingSec';

// NOTE The landing page shapes SHOULD persist even if you swap pages

// NOTE Reference on react state and TS https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
// interface IRenderState {
//   home: boolean,
//   about: boolean,
//   urbanChoreoEC: boolean
// }

// interface IState {
//   renderState: IRenderState,
// }

// public state: IState = {
//   renderState: {
//     home: true,
//     about: false,
//     urbanChoreoEC: false,
//   }
// }

interface State {
  renderState: {
    home: boolean,
    about: boolean,
    urbanChoreoEC: boolean,
  }
}

export class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderState: {
        home: true,
        about: false,
        urbanChoreoEC: false,
      }
    }
  }

  toggleHomeState= (key: string) => (e: any) => {
    // this.setState({renderState})
    console.log(key);
  }
  // onClick={(e)=> this.toggleHomeState(to, e)}



  render() {
    return (
      <>
        <Nav
          id='nav'
          itemClass='nav__item'
          isPrimNavBar={true}
        >
          <NavLink
            key={1}
            to='/'
            onClick={this.toggleHomeState('home')}
          >
            Home
          </NavLink>
          <NavLink
            key={2}
            to='/about'
            onClick={this.toggleHomeState('about')}
          >
            About
          </NavLink>
          <NavLink
            key={3}
            to='/urban-choreo-east-coast'
            onClick={this.toggleHomeState('urbanChoreoEC')}
          >
            Urban Choreo-East Coast
          </NavLink>
        </Nav>
        {LandingShapes}
        <div
          className='route-ctr'
        >
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/urban-choreo-east-coast" component={UrbanChoreoEC} />
        </div>
      </>
    );
  }
}
