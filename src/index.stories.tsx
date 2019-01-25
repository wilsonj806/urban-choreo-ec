/* NOTE below two imports are REQUIRED
*/

import * as React from 'react';
import { storiesOf } from '@storybook/react';

// NOTE Components
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Container } from './components/Container';

// NOTE Pages
import { App } from './App';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';

// NOTE import the component itself into the storybook index file you want to test
// So Node's module.exports, exports an object that you need to call???
const Button =  require('@storybook/react/demo').Button;

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Nav', module)
  .add('one string', () => {
    return (
    <Nav>
      hi
    </Nav>
    )})
    .add('span elements', () => {
      return (
      <Nav>
        <span>hi</span>
        <span>hi</span>
      </Nav>
      )})
    .add('with React Router', () => {
      return (
        <BrowserRouter>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/urban-choreo-east-coast'>Urban Choreo-East Coast</Link>
          </Nav>
        </BrowserRouter>
      )});

storiesOf('App', module)
  .add('default', () => <App/>);

storiesOf('Card', module)
  .add('default', () => <Card/>);

storiesOf('Container', module)
  .add('default', () => <Container/>);