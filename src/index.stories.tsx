/* NOTE below two imports are REQUIRED
*/

import * as React from 'react';
import { storiesOf } from '@storybook/react';

// NOTE Components
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Section } from './components/Section';

// NOTE Pages
import { App } from './App';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';

// NOTE import the component itself into the storybook index file you want to test
// So Node's module.exports, exports an object that you need to call???
// import { Demo } from '../extra/sample-ts-react/sample';

const Button =  require('@storybook/react/demo').Button;

storiesOf('Button-Demo', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Nav', module)
  .add('config that throws an error', () => {
    return (
    <Nav
      id='nav'
      itemClass='nav__item'
    >
      hi
    </Nav>
    )})
    .add('single span element', () => {
      return (
      <Nav
        id='nav'
        itemClass='nav__item'
      >
        <span>hi</span>
      </Nav>
    )})
    .add('span elements', () => {
      return (
      <Nav
        id='nav'
        itemClass='nav__item'
      >
        <span>hi</span>
        <span>hi</span>
      </Nav>
    )})
    .add('with React Router', () => {
      return (
        <BrowserRouter>
          <Nav
            id='nav'
            itemClass='nav__item'
          >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/urban-choreo-east-coast'>Urban Choreo-East Coast</Link>
          </Nav>
        </BrowserRouter>
    )});

storiesOf('App', module)
  .add('default', () => <App/>);

storiesOf('Card', module)
  .add('simple', () => <Card>I'm a basic card</Card>)
  .add('simple with header', () => {
  return(
    <Card>
      {{
        header: 'I\'m a card with a header and some content',
        content: (
          <>
            <p>
              Here's some content
            </p>
            <p>
              Here's some more content
            </p>
          </>
        ),
      }}
    </Card>
  )
  })
  .add('card with header ele and media', () => {
    return(
      <Card>
        {{
          header: (
            <>
              <h2>I'm a fancier card</h2>
            </>
          ),
          media: (
            <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
          ),
          content: (
            <>
              <p>Content here</p>
            </>
          )
        }}
      </Card>
    )
  });

storiesOf('Section', module)
  .add('default', () => <Section/>);

