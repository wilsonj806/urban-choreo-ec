import * as React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch, NavLink } from 'react-router-dom';

import { Nav } from './components/NavBar';
import { About } from './pages/About';
import { EastCoastChoreo } from './pages/EastCoastChoreo';
import { Landing } from './pages/Landing';

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
    // console.log(key);
  }
  // onClick={(e)=> this.toggleHomeState(to, e)}

  render() {
    return (
      <>
        <Nav
          id='nav'
          listClass='nav__list'
          itemClass='nav__item'
          isPrimNavBar={true}
        >
          <NavLink
            key={1}
            to='/'

          >
            Home
          </NavLink>
          <NavLink
            key={2}
            to='/about'

          >
            About
          </NavLink>
          <NavLink
            key={3}
            to='/east-coast-choreo'

          >
            East Coast Choreo
          </NavLink>
        </Nav>
        <div
          className='route-ctr'
        >
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/east-coast-choreo" component={EastCoastChoreo} />
        </div>
      </>
    );
  }
}


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