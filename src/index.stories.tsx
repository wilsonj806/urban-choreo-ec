/* NOTE below two imports are REQUIRED
*/

import * as React from 'react';
import { storiesOf } from '@storybook/react';

// NOTE Components
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { MediaCtr } from './components/MediaCtr';
import { Section } from './components/Section';

// NOTE Mid-level Templates

import { AboutCard, AboutSec } from './templates/AboutSec';

// NOTE Pages
import { App } from './App';
import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';

// NOTE import the component itself into the storybook index file you want to test
// So Node's module.exports, exports an object that you need to call???
// import { Demo } from '../extra/sample-ts-react/sample';

storiesOf('Low Level Component/ Nav', module)
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
            <Link to='/references'>References</Link>
          </Nav>
        </BrowserRouter>
    )});

storiesOf('Low Level Component/Container', module)
  .add('should throw', () => {
    return(
      <MediaCtr>
        stirng
      </MediaCtr>
    )
  })
  .add('should render', () => {
    return(
      <MediaCtr>
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      </MediaCtr>
    )
  })

storiesOf('Low Level Component/ Card', module)
  .add('simple', () => <Card className='card--shadow'>I'm a basic card</Card>)
  .add('simple with header', () => {
  return(
    <Card
      className='card--shadow'
    >
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
      <Card
        className='card--shadow card--basic'
      >
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

storiesOf('Low Level Component/ Section', module)
  .add('should throw', () => {
    return(
      <Section
        className='section--shadow'
      >
        {{
          header: 'hi',
          card: (
            <>
            <div>
              <span>hi</span>
            </div>
            </>
          )
        }}
      </Section>
    )
  })
  .add('section with card', () => {
    return(
      <Section
        className='section--bg-light '
      >
        {{
          header: (<h1>I'm a section with a card</h1>),
          card:(
            <Card
              className='card--shadow card--basic'
            >
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
        }}
      </Section>
    )
  })
  .add('section with cards', () => {
    return(
      <Section
        className='section--bg-light section--one-col'
      >
        {{
          header: (<h1>I've got a background</h1>),
          card: [
            <Card
              key={1}
              className='card--shadow card--basic'
            >
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
            </Card>,
            <Card
              key={2}
              className='card--shadow card--basic'
            >
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
            </Card>,
            <Card
            key={3}
              className='card--shadow card--basic'
            >
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
          ]
         }}
      </Section>
    )
});

storiesOf('Mid level templates/ About Section', module)
  .add('About card', () => {
    return (
      AboutCard
    )
  })
  .add('About section', () => {
    return (
      AboutSec
    )
  });

storiesOf('App', module)
  .add('default', () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
});