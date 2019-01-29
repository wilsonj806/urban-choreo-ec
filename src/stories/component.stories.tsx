/* NOTE below two imports are REQUIRED
*/
import * as React from 'react';
import { storiesOf } from '@storybook/react';

// NOTE Components
import { Nav } from '../components/NavBar';
import { Card } from '../components/Card';
import { MediaCtr } from '../components/MediaCtr';
import { Section } from '../components/Section';

import * as Placeholder from '../templates/Placeholder';

import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';

const { GenericP, GenericP2, GenericMediaCtr } = Placeholder;


storiesOf('Low Level Component/ Primary Nav Bar', module)
  .add('config that throws an error', () => {
    return (
    <Nav
      id='nav'
      itemClass='nav__item'
      listClass='nav__list'
      isPrimNavBar={true}
    >
      hi
    </Nav>
    )})
    .add('single span element', () => {
      return (
      <Nav
        id='nav'
        itemClass='nav__item'
        listClass='nav__list'
        isPrimNavBar={true}
      >
        <span>hi</span>
      </Nav>
    )})
    .add('span elements', () => {
      return (
      <Nav
        id='nav'
        itemClass='nav__item'
        listClass='nav__list'
        isPrimNavBar={true}
      >
        <span>hi</span>
        <span>hi</span>
      </Nav>
    )})
    .add('Nav Bar with React Router', () => {
      return (
        <BrowserRouter>
          <Nav
            id='nav'
            itemClass='nav__item'
            listClass='nav__list'
            isPrimNavBar={true}
          >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/urban-choreo-east-coast'>Urban Choreo-East Coast</Link>
            <Link to='/references'>References</Link>
          </Nav>
        </BrowserRouter>
)});

storiesOf('Low Level Component/ Secondary Nav Component', module)
  .add('config that throws an error', () => {
    return (
    <Nav
      id=''
      itemClass='cntnt-list__item'
      isPrimNavBar={false}
    >
      hi
    </Nav>
    )})
  .add('span elements', () => {
    return (
    <Nav
      id=''
      itemClass='cntnt-list__item'
      isPrimNavBar={false}
    >
      <a href=''>Elements</a>
      <a href=''>Prelude NY</a>
      <a href=''>Defining Rythym</a>
      <a href=''>Prelude EC</a>
    </Nav>
  )})

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
  });

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
  })
  .add('Double Column layout', () => {
    return(
      <Section
        className='section--double-col section--bg-light'
      >
        {{
          header: (<h1 className='heading--main'>I'm pretty complex</h1>),
          card: null,
          custom: [
            GenericMediaCtr,
            <Card className='card--basic'
            >
              {{heading: null, content: GenericP}}
            </Card>,
            <Card className='card--basic'
            >
              {{heading: null, content: GenericP2}}
            </Card>,
            GenericMediaCtr
          ]
        }}
      </Section>

    )
  })
