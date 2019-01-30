import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import { Nav } from '../components/NavBar';
import { MediaCtr } from '../components/MediaCtr';
import { Section } from '../components/Section';
import * as Placeholder from './Placeholder';
import '../stylesheets/Heading.css';
import '../stylesheets/Templates.css';
import '../stylesheets/CustomLayouts.css';



const ElementsCards = (
  <Card
    className='comp-grid__card card--media-top comp-grid--TL'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading'>Fusion Elements</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p>Dance competition hosted by Fusion BU. Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. </p>
        </>
      )
    }}
  </Card>
)

const PreludeNYCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--TR'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading'>Prelude NY</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p>Dance competition held by Prelude. Usually held in NYC Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. </p>
        </>
      )
    }}
  </Card>
)

const DRCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--BL'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading'>Defining Rythym</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p>Dance competition held in New Jersey. Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. </p>
        </>
      )
    }}
  </Card>
)

const PreludeECCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--BR'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading'>Prelude East Coast</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p>Dance competition held by Prelude, hosted by Project D. Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. </p>
        </>
      )
    }}
  </Card>
)

const CompetitionNav = (
  <Nav
    isPrimNavBar={false}
    itemClass='cntnt-list__item'
    listClass='cntnt-list--competition'
  >
    <a
      href='https://www.facebook.com/bu.fusion/'
      target='_blank'
    >
      Elements
    </a>
    <a
      href='http://www.preludedancecompetition.com/prelude-new-york/'
      target='_blank'
    >
      Prelude NY
    </a>
    <a
      href='https://definingrhythm.com/'
      target='_blank'
    >
      Defining Rythym
    </a>
    <a
      href='http://www.preludedancecompetition.com/prelude-dmv/'
      target='_blank'
    >Prelude DMV</a>
    <a
      href='http://www.preludedancecompetition.com/prelude-east-coast/'
      target='_blank'
    >Prelude EC</a>
  </Nav>
)

/* NOTE Needs state and need to pass it through props or something similar to track render state
Assuming its not using React Router's Static Router */


const CompetitionSec = (
  <Section
    className='section--competition section--bg-light comp-grid'
  >
    {{
      header: (
        <h2 className='heading comp-grid--heading'>Competitions in the East Coast</h2>
      ),
      media: (
        <MediaCtr
          className='comp-grid--center'
        >
          {CompetitionNav}
        </MediaCtr>
      ),
      card: null,
      custom: ([ElementsCards, PreludeNYCard, DRCard, PreludeECCard])
    }}
  </Section>
)

export { CompetitionNav, CompetitionSec}